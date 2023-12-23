import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { LojaPage, Product } from '../paginas/loja/loja.page';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getCurrentUser() {
    throw new Error('Method not implemented.');
  }
  getUserProfile(loginId: number) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:3000/login'; // Altere para o URL correto do seu backend
  private loginUrl = 'http://localhost:3000/login';
  private Url = 'http://localhost:3000';
  private prodUrl = 'http://localhost:3000/products';
  private products = new BehaviorSubject<any[]>([]);
  enableNotifications: boolean = false;
  selectedLanguage: string = 'en';
  private darkMode = new BehaviorSubject<boolean>(false);
  isDarkMode = this.darkMode.asObservable();
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  
  constructor(private http: HttpClient) {

    const storedUser = localStorage.getItem('currentUser');
    const initialUser = storedUser ? JSON.parse(storedUser) : null;
    this.currentUserSubject = new BehaviorSubject<any>(initialUser);
    this.currentUser = this.currentUserSubject.asObservable();

  }

  toggleDarkMode(): void {
    this.darkMode.next(!this.darkMode.value);
  }



  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  // Implemente aqui o método para definir o usuário atual
  setCurrentUser(user: any): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  // Implemente aqui o método para limpar o usuário atual (logout)
  clearCurrentUser(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }




  cadastrarUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, usuario);
  }


  authenticate(username: string, password: string): Observable<any> {
    return this.http.get<any[]>(this.loginUrl, { observe: 'response' });
  }

    // Buscar todos os posts
     getUsersWithPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
  
    // Adicionar um comentário a um post específico
    addCommentToPost(postId: number, comment: any): Observable<any> {
      return this.http.post(`${this.apiUrl}/posts/${postId}/comments`, comment);
    }
  // Adicione outras operações CRUD ou métodos necessários aqui


  loadProductsFromBackend() {
    this.http.get<any[]>(`${this.apiUrl}/products`).subscribe(
      (data: any[]) => {
        this.products.next(data); // Atualiza os produtos no BehaviorSubject
      },
      (error) => {
        console.error('Erro ao carregar os produtos:', error);
      }
    );
  }

  getAllLogins() {
    return this.http.get<any[]>(this.apiUrl);
  }

  updateLogin(loginId: number, newData: any) {
    return this.http.put<any>(`${this.apiUrl}/${loginId}`, newData); // Correção da concatenação do loginId
  }
  
  deleteLogin(loginId: number) {
    return this.http.delete<any>(`${this.apiUrl}${loginId}`);
  }

  
getLogin(): Observable<any> {
  return this.http.get(this.apiUrl);
}

atualizarLogin(id: number, login: any): Observable<any> {
  const url = `${this.apiUrl}/${id}`;
  return this.http.put(url, login);
}


excluirLogin(id: number): Observable<any> {
  const url = `${this.apiUrl}/${id}`;
  return this.http.delete(url);
}



getPosts(): Observable<any[]> {
  return this.http.get<any[]>(`${this.Url}/posts`);
}




getLoginPorUsername(username: string): Observable<any> {
  return this.http.get<any[]>(`${this.Url}/login?username=${username}`);
}

getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(this.prodUrl);
}

getLoginn(loginId: number): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/login/${loginId}`);
}

updateUserProfileImage(loginId: number, profileImage: any): Observable<any> {
  // Suponha que você esteja enviando a imagem como um formulário FormData
  const formData = new FormData();
  formData.append('profileImage', profileImage);

  return this.http.put<any>(`${this.apiUrl}/login/${loginId}`, formData);
}


atualizarProduto(productId: number, productData: any): Observable<any> {
  const url = `${this.apiUrl}/products/${productId}`; // Substitua pela URL de atualização do produto
  return this.http.put<any>(url, productData);
}

excluirProduto(productId: number): Observable<any> {
  const url = `${this.apiUrl}/products/${productId}`; // Substitua pela URL de exclusão do produto
  return this.http.delete<any>(url);
}

getUserByUsername(username: string): Observable<any> {
  // Chamada para obter os dados do usuário com base no username
  return this.http.get<any>(`${this.apiUrl}/login?username=${username}`);
}

authenticateUser(username: string, password: string): Observable<any> {
  // Implemente a lógica para autenticar o usuário aqui
  // Faça uma chamada HTTP para verificar as credenciais do usuário
  // Por exemplo:
  // return this.http.post<any>('URL_da_API_para_autenticação', { username, password });

  // Mock de retorno para testes (substitua pelo código de chamada real)
  const fakeUser = {
    username: 'admin',
    adm: true // Simulando um usuário administrador
  };

  return new Observable((observer) => {
    observer.next(fakeUser);
    observer.complete();
  });
}

}
  
  



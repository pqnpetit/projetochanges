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
  private loggedInUser: any = null;

  private apiUrl = 'http://localhost:3000/login'; // Altere para o URL correto do seu backend
  private loginUrl = 'http://localhost:3000/login';
  private Url = 'http://localhost:3000';
  private photoUrl = 'http://localhost:3000';
  private prodUrl = 'http://localhost:3000/products';
  private postsUrl = 'http://localhost:3000/posts';

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

  getUserDetails(): Observable<any> {
    // Suponha que a API retorne os detalhes do usuário através dessa rota
    return this.http.get<any>(`${this.apiUrl}/user-details`);
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

  // Método para buscar posts
  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.Url}/posts`);
  }

  // Método para adicionar um comentário a um post específico
  adicionarComentario(postId: number, novoComentario: string): Observable<any> {
    const comments = { postId, text: novoComentario };
    return this.http.post<any>(`${this.apiUrl}/posts/${postId}/comments`, comments);
  }

  // Método para buscar comentários de um post específico
  getComentariosDoPost(postId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/posts/${postId}/comments`);
  }
  getSampleData() {
    let promise = new Promise((resolve, reject) => {
      this.http.get(`${this.Url}`)
          .toPromise()
          .then(res => {
              resolve(res);
          }, error => {
              reject(error);
          });
    });
    return promise;
  }

  getFriends(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.Url}/friends`)
        .toPromise()
        .then(res => {
          resolve(res); // ou res['friends'], se o retorno da API já fornecer essa estrutura
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  
  getGroups(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.Url}/groups`)
        .toPromise()
        .then(res => {
          resolve(res); // ou res['groups'], se o retorno da API já fornecer essa estrutura
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  
  getLoggedUser(): any {
    // Suponha que você tenha uma forma de recuperar os dados do usuário logado,
    // seja a partir de um token, do armazenamento local (localStorage) ou de outro meio.
    // Aqui, estamos apenas simulando um usuário logado para demonstração.

    // Recupere os dados do usuário do localStorage ou de onde estiverem armazenados
    const userDataString = localStorage.getItem('userData');
    const userData = userDataString ? JSON.parse(userDataString) : null;

    return userData; // Retorna os dados do usuário logado
  }


  // Método para realizar o login e armazenar os detalhes do usuário logado
  loginUser(username: string, password: string): void {
    // Lógica para autenticação
    // Após autenticação bem-sucedida, armazene os detalhes do usuário logado
    this.loggedInUser = {
      username: username,
      // Outros detalhes do usuário, se necessário
    };

    // Armazene os detalhes do usuário no localStorage para uso futuro
    localStorage.setItem('loggedInUser', JSON.stringify(this.loggedInUser));
  }

  // Método para obter os detalhes do usuário logado
  getLoggedInUser(): any {
    return this.loggedInUser;
  }

  // Métodos para interagir com a API...
  // Por exemplo, um método para enviar dados de curtidas para o backend
  likeFriend(friendId: number) {
    // Faça a chamada à API para atualizar as curtidas do amigo com ID friendId
  }
}



  
  



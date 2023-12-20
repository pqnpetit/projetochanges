import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000'; // Altere para o URL correto do seu backend
  private loginUrl = 'http://localhost:3000/login';
  private products = new BehaviorSubject<any[]>([]);
  enableNotifications: boolean = false;
  selectedLanguage: string = 'en';


  constructor(private http: HttpClient) {}

  cadastrarUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, usuario);
  }


  authenticate(username: string, password: string): Observable<any> {
    return this.http.get<any[]>(this.loginUrl, { observe: 'response' });
  }

    // Buscar todos os posts
     getUsersWithPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/login`);
  }
  
    // Adicionar um comentário a um post específico
    addCommentToPost(postId: number, comment: any): Observable<any> {
      return this.http.post(`${this.apiUrl}/posts/${postId}/comments`, comment);
    }
  // Adicione outras operações CRUD ou métodos necessários aqui

  getProducts() {
    return this.products.asObservable();
  }

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

}
  
  



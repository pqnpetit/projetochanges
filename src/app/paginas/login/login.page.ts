import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = '';
  password = '';
  usuarioLogado = false;
  adm = true;

  constructor(
    private http: HttpClient,
    private router: Router,
    public nav: NavController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  verificarAutenticacao() {
    // Verifique o armazenamento local ou estado do aplicativo para verificar se o usuário está autenticado
    // Define usuarioLogado como true se estiver autenticado
    this.usuarioLogado = true;
  }

  login() {
    this.http.get<any[]>('http://localhost:3000/login', { observe: 'response' }).subscribe(
      (response) => {
        const users = response.body;
        if (users) {
          const user = users.find((u) => u.username === this.username && u.password === this.password);
          if (user) {
            if (user.adm === true) {
              // Redirecionar para a página de administrador se o usuário for um administrador
              this.router.navigate(['/administrator']);
            } else {
              // Se o usuário não tiver permissão de administrador, redirecionar para a página home
              this.router.navigate(['/home']);
            }
          } else {
            // Login bem-sucedido
            console.log('Login bem-sucedido!');
            this.username = '';
            this.password = '';
            this.router.navigate(['/home']); // onde está home será a pagina aberta apos o login
          }
        } else {
          // Lidar com o caso em que users é null
          console.log('Não foi possível obter a lista de usuários.');
        }
      },
      (error) => {
        // Lidar com erros de requisição HTTP
        console.error('Erro na requisição HTTP:', error);
      }
    );
  }
}

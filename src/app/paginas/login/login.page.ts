import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
username='';
password='';
usuarioLogado: boolean = false; // Inicialize como false por padrão ou verifique o armazenamento local para definir isso

 constructor(private http: HttpClient, private router: Router,public nav:NavController,private navCtrl: NavController) {}

  ngOnInit() {
  }

  verificarAutenticacao() {
    // Verifique o armazenamento local ou estado do aplicativo para verificar se o usuário está autenticado
    // Define usuarioLogado como true se estiver autenticado
    this.usuarioLogado = true;
  }

    login() {
    
      this.http.get<any[]>('http://localhost:3000/login', { observe: 'response' })
        .subscribe(response => {
          const users = response.body;
          if (users) {
            const user = users.find(u => u.username === this.username && u.password === this.password);
            if (user) {
              // Login bem-sucedido
              console.log('Login bem-sucedido!');
              this.username='';
              this.password ='';
              this.router.navigate(['/home']); // onde está home será a pagina aberta apos o login
            } else {
              // Login falhou
              console.log('Login Inválido');
            }
          } else {
            // Lidar com o caso em que users é null
            console.log('Não foi possível obter a lista de usuários.');
          }
        });

       
        
    }
}
  

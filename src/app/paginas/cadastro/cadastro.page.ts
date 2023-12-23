import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  hideTabs: boolean = true;
  // Restante do código...


  login: any = {
    id: '',
    adm: false,
    email: '',
    birthday: '',
    name: '',
    username: '',
    password: ''
  };

  constructor(private apiService: ApiService) {}

  cadastrar() {
    const usernamePattern = /^[^\d\s@]+$/; // Expressão regular para não permitir números no nome de usuário
    const currentYear = new Date().getFullYear(); // Obtém o ano atual
  
    if (
      this.login.username &&
      this.login.email &&
      this.login.birthday &&
      this.login.password &&
      this.login.name.length >= 3 &&
      this.login.name.length <= 30 &&
      this.login.username.length >= 3 &&
      this.login.username.length <= 16 &&
      this.login.password.length >= 6 &&
      this.login.password.length <= 24 &&
      this.login.email.includes('@') && // Verifica se há um '@' no e-mail
      usernamePattern.test(this.login.username) && // Testa o padrão do nome de usuário
      new Date(this.login.birthday).getFullYear() <= currentYear // Verifica se o ano de aniversário é menor ou igual ao ano atual
    ) {
      // Se todas as condições forem atendidas, pode prosseguir com o cadastro
      this.apiService.cadastrarUsuario(this.login).subscribe(
        (response) => {
          console.log('Usuário cadastrado com sucesso:', response);
          this.limparFormulario();
        },
        (error) => {
          console.error('Erro ao cadastrar usuário:', error);
        }
      );
    } else {
      console.log('Por favor, preencha todos os campos corretamente e insira um ano válido.');
      // Exiba uma mensagem para o usuário indicando os requisitos para os campos e o ano de aniversário
      // Por exemplo: this.showToast('Preencha os campos corretamente e insira um ano válido.');
    }
  }

  limparFormulario() {
    this.login = {
      id:'',
      adm: false,
      email: '',
      birthday: '',
      name: '',
      username: '',
      password: ''
    };
  }
  
}

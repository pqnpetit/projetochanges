import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  login: any = {
    username: '',
    password: ''
  };

  constructor(private apiService: ApiService) {}

  cadastrar() {
    this.apiService.cadastrarUsuario(this.login).subscribe(
      (response) => {
        console.log('Usuário cadastrado com sucesso:', response);
        // Limpar o formulário após o cadastro
        this.limparFormulario();
      },
      (error) => {
        console.error('Erro ao cadastrar usuário:', error);
      }
    );
  }

  limparFormulario() {
    this.login = {
      username: '',
      password: ''
    };
  }
}

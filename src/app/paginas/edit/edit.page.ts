import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  
  loginId!: number;
  login: any = {
    id: null,
    username: '',
    adm: false,
    password: '',
  };

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.loginId = +params['id'];
      this.getUser(this.loginId);
    });
  }

  getUser(loginId: number) {
    this.apiService.getUserById(loginId).subscribe(
      (data) => {
        this.login = data;
      },
      (error) => {
        console.error('Erro ao obter os dados do usuário:', error);
      }
    );
  }

  updateUser() {
    this.apiService.updateUser(this.loginId, this.login).subscribe(
      (response) => {
        console.log('Usuário atualizado com sucesso!', response);
      },
      (error) => {
        console.error('Erro ao atualizar o usuário:', error);
      }
    );
  }

  deleteUser() {
    this.apiService.deleteUser(this.loginId).subscribe(
      (response) => {
        console.log('Usuário deletado com sucesso!', response);
      },
      (error) => {
        console.error('Erro ao deletar o usuário:', error);
      }
    );
  }
}

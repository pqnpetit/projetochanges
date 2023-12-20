import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.page.html',
  styleUrls: ['./administrator.page.scss'],
})
export class AdministratorPage implements OnInit {
  logins: any[] = [];
newData: any;

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.getAllLogins();
  }

  getAllLogins() {
    this.apiService.getAllLogins().subscribe(
      (data) => {
        this.logins = data;
      },
      (error) => {
        console.error('Erro ao obter os logins:', error);
      }
    );
  }

  updateLogin(loginId: number, newData: any) {
    this.apiService.updateLogin(loginId, newData).subscribe(
      (response) => {
        console.log('Login atualizado com sucesso!', response);
      },
      (error) => {
        console.error('Erro ao atualizar o login:', error);
      }
    );
  }

  deleteLogin(loginId: number) {
    this.apiService.deleteLogin(loginId).subscribe(
      (response) => {
        console.log('Login deletado com sucesso!', response);
        this.getAllLogins(); // Atualiza a lista após deletar
      },
      (error) => {
        console.error('Erro ao deletar o login:', error);
      }
    );
  }
}

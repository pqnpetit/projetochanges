import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NavController } from '@ionic/angular'; // Importe NavController

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.page.html',
  styleUrls: ['./administrator.page.scss'],
})
export class AdministratorPage implements OnInit {
  logins: any[] = [];

  constructor(private apiService: ApiService,private navCtrl: NavController) {}

  ngOnInit() {
    this.getAllLogins();
  }


  redirectToEdit(userId: number) {
    this.navCtrl.navigateForward(`/edit/${userId}`); // Navegue para a página de edição com o ID do usuário
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
        this.getAllLogins(); // Atualiza a lista após a edição
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

  editLogin(user: any) {
    // Aqui você pode implementar a lógica para edição do usuário
    // Por exemplo, abrir um modal com formulário preenchido pelos dados do usuário
    // Ao salvar as edições, chame this.updateLogin(loginId, newData);
    console.log('Editando usuário:', user);
  }
}

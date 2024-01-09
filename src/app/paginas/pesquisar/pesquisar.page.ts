import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.page.html',
  styleUrls: ['./pesquisar.page.scss'],
})
export class PesquisarPage {
  login: any ={
  profileImage: ''
};

username: string = ''; // Declare a propriedade username

  constructor(private apiService: ApiService) {}

  buscarLoginPorUsername() {
    this.apiService.getLoginPorUsername(this.username).subscribe((data: any) => {
      if (data.length > 0) {
        this.login = data[0]; // Supondo que o primeiro item seja o login desejado
      } else {
        this.login = data;
      }
    });
  }
  
}

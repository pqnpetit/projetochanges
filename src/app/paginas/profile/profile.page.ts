import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  login: any = {}; // Definindo login como um objeto vazio

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const username = params['username']; // Obtendo o username da query parameter

      // Fazendo a chamada para obter os dados do usuário com base no username
      this.apiService.getUserByUsername(username).subscribe((data) => {
        this.login = data; // Definindo os dados do usuário obtidos na variável 'login'
      });
    });
  }
}
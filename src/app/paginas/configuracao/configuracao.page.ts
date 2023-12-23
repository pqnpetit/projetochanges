import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.page.html',
  styleUrls: ['./configuracao.page.scss'],
})
export class ConfiguracaoPage implements OnInit {

  selectedLanguage = 'pt'; // Defina o idioma padrão ou um idioma inicial

  enableNotifications: boolean = false;

  changeLanguage() {

  }

  toggleDarkMode() {
    this.apiService.toggleDarkMode();
  }
  constructor(public apiService : ApiService,) {}
  themeToggle = false;

  ngOnInit() {
  
  
  }

 

  saveSettings() {
    console.log('Configurações salvas:', this.apiService.enableNotifications, this.apiService.selectedLanguage);
    // Aqui você pode adicionar a lógica para salvar as configurações no serviço
  }
}

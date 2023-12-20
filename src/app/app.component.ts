import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  selectedLanguage = 'pt'; // Defina o idioma padrão ou um idioma inicial
  private appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    
  
  ];

}

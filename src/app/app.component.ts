import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  private appPages = [
    { title: 'Home', url: '/folder/inbox', icon: 'home' },
    
  
  ];

  constructor() {}
}

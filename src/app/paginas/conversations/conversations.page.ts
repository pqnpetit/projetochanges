import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.page.html',
  styleUrls: ['./conversations.page.scss'],
})
export class ConversationsPage {
  friends: any[] = [
    {
      name: 'Brennan Holmes',
      avatar: 'https://randomuser.me/api/portraits/men/79.jpg',
      is_online: false,
      last_message: { text: 'Hi!', time: '9:00 AM' }

      // ... outras propriedades
    },
    {
      name: 'Luizin',
      avatar: 'assets/2.jpg',
      is_online: false,
      last_message: { text: 'Hello there!', time: '9:30 AM' }
    },
    {
      name: 'Matheus',
      avatar: 'assets/3.jpeg',
      is_online: false,
      last_message: { text: 'Hello there!', time: '6:30 AM' }
    },
    {
      name: 'Leticinha',
      avatar: 'assets/4.jpg',
      is_online: true,
      last_message: { text: 'Hello there!', time: '9:30 AM' }
    },
    {
      name: 'kyubi',
      avatar: 'assets/5.jpg',
      is_online: true,
      last_message: { text: 'Hello there!', time: '9:30 AM' }
    },
    {
      name: 'WrongTrump',
      avatar: 'assets/6.webp',
      is_online: false,
      last_message: { text: 'Hello there!', time: '13:30 AM' }
    },
    // Adicione mais usuários conforme necessário
  ];

  constructor(private router: Router) {}

  openChat(friends: any) {
    this.router.navigate(['/chat', friends.name]);
    // Aqui você pode passar qualquer informação adicional para a página de chat, como o ID do usuário, etc.
  }
}

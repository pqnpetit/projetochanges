import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'message-view',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {

  friends: any[] = []; // Inicializando a propriedade friends como um array vazio

  constructor(
    private router: Router,
    private apiService: ApiService
  ) { }



  ngOnInit() {
    this.loadFriends();
  }

  loadFriends() {
    this.apiService.getFriends().then(result => {
      this.friends = result;
    }).catch(error => {
      console.log('getFriends error', error);
    });
  }

  openChat(friendId: number) {
    this.router.navigate([`/chat/${friendId}`]);
  }

}

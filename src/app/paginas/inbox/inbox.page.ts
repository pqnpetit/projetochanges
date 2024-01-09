import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {
  friends: any[] = [
    // Aqui você pode inicializar a lista de amigos com os dados do JSON
    // Copie os dados do JSON 'friends' aqui
  ];
  
  segment: string = 'message';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openChat(friendId: number) {
    this.router.navigate(['/chat', friendId]);
  }

}

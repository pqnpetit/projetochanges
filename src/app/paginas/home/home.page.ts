import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';

interface Friend {
  avatar: string;
  name: string;
  last_message: {
    time: string;
  };
  feed_image: string;
  likes: number;
  comments: string[];
  liked?: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  friends: Friend[] = [
    {
      avatar: 'avatar-url',
      name: 'Friend Name',
      last_message: {
        time: '10:00 PM'
      },
      feed_image: 'image-url',
      likes: 0,
      comments: []
    }
    // ... Outros amigos ...
  ];

  constructor(
    private apiService: ApiService,private alertController: AlertController
  ) { }

  ngOnInit() {
    this.loadFeed();
  }

  loadFeed() {
    this.apiService.getFriends().then(result => {
        // console.log('getFriends result', result);
        this.friends = result;
    }).catch(error => {
        console.log('getFriends error', error);
    });
  }

  likeFriend(friend: Friend) {
    if (friend.likes === undefined) {
      friend.likes = 0;
    }
    if (friend.liked === undefined) {
      friend.liked = false;
    }

    if (!friend.liked) {
      friend.likes++;
      friend.liked = true;
    } else {
      friend.likes--;
      friend.liked = false;
    }
  }

  commentFriend(friend: any) {
    // Aqui você pode implementar a lógica para adicionar um comentário
    // Isso pode incluir a abertura de uma caixa de diálogo para inserir um novo comentário
  }

  async addComment(friend: Friend, comment: string) {
    // Certifique-se de inicializar a propriedade 'comments' se ainda não existir
    if (!friend.comments) {
      friend.comments = [];
    }

    // Adicione o comentário à lista de comentários do amigo
    friend.comments.push(comment);

    // Atualize os comentários exibidos na página
    this.friends = this.friends.map((f: Friend) => {
      if (f.name === friend.name) {
        return { ...f, comments: friend.comments };
      }
      return f;
    });
  }

  async openCommentBox(friend: Friend) {
    const alert = await this.alertController.create({
      header: 'Add Comment',
      inputs: [
        {
          name: 'comment',
          type: 'textarea',
          placeholder: 'Write your comment here...'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: (data) => {
            const comment = data.comment;
            this.addComment(friend, comment);
          }
        }
      ]
    });

    await alert.present();
  }
}

import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonContent, IonTextarea } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage {
  @ViewChild(IonContent) content!: IonContent;
  @ViewChild('chatContainerRef') chatContainerRef!: any;
  
  newMessage: string = ''; // Adicione essa linha para definir a propriedade newMessage como string vazia
  login: any = {
    "last_message":{
      "text":"Get Out!",
      "time":"10:00 AM"
    }
  }
  friends: any = {
    "name":"Brennan Holmes",
    "avatar":"https://randomuser.me/api/portraits/men/79.jpg",
    "is_online":false,
    "feed_image":"https://via.placeholder.com/600/24f355",
    "description":"Keep it simple",
    "last_message":{
      "text":"Hi!",
      "time":"9:00 AM"
    },
    "notification_message":{
      "text":"Likes your photos",
      "time":"10 min ago"
    },
     // Substitua pelo caminho correto da imagem do amigo
    // Outras propriedades dos amigos...
  };
  
  
  
  // Carregar informações do usuário ao entrar
  

  messages: any[] = []; // Array para armazenar as mensagens
  username: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const friendsId = params['friendsId'];
      // Aqui você pode usar o friendsId para carregar a conversa correspondente
      // Por exemplo, fazer uma solicitação ao serviço com o ID do usuário para carregar as mensagens
    });
  }

// Implemente a lógica para carregar informações do usuário selecionado
loadUser(friend: any) {
  this.friends = friend; // Atualize as informações do usuário no chat
  this.messages = []; // Limpe as mensagens ao carregar um novo usuário
}


scrollToBottom() {
  if (this.content && this.chatContainerRef) {
    this.content.scrollToBottom(); // Role até o final do conteúdo
  }
}


// Modifique o método sendMessage para enviar mensagens para o usuário em foco
sendMessage(text: string) {
  const currentTime = new Date().toLocaleTimeString(); // Obtém o horário atual
  const newMessage = {
    text,
    time: currentTime

  };
  
  this.scrollToBottom();
  // Adicione a lógica para enviar a mensagem ao usuário específico em foco
  // Exemplo: this.userService.sendMessage(this.friends.name, newMessage);

  this.messages.push(newMessage); // Adiciona a mensagem ao array de mensagens
}
onScrollEnd() {
  // Se necessário, implemente a lógica para carregar mais mensagens à medida que o usuário rola para cima
}

  // Método para lidar com a seleção de arquivo
  fileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const files: FileList = input.files;
      // Aqui você pode fazer o que deseja com os arquivos selecionados,
      // como enviar para um serviço ou tratá-los de acordo com a sua lógica de negócios.
    }
  }

}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ModalController } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  login: any; // Certifique-se de ajustar o tipo conforme a estrutura dos dados do usuário
  
  isImageExpanded: boolean = false;
  expandedImageUrl: string = '';

   constructor(private apiService: ApiService, private route: ActivatedRoute,private domSanitizer: DomSanitizer, private navCtrl: NavController) {}
  
  friends: any;
  loggedInUser: any = {}; // Objeto para armazenar os dados do usuário logado
  posts: any[] = []; // Inicialize a propriedade posts como um array vazio

  ngOnInit() {
    this.loadPhotos();
     this.apiService.getPosts().subscribe((data: any[]) => {
      this.posts = data; // Atribua os posts do serviço à propriedade posts quando a requisição for completada
    });
  }
  loadPhotos() {
    this.apiService.getFriends().then(result => {
        this.friends = result;
    }).catch(error => {
        console.log('getFriends error', error);
    });
  }
  ionViewDidEnter() {
    this.loggedInUser = this.apiService.getLoggedInUser();
  }

  expandImage(imageUrl: string) {
    this.expandedImageUrl = imageUrl;
    this.isImageExpanded = true;
  }

  closeExpandedImage() {
    this.isImageExpanded = false;
    this.expandedImageUrl = '';
  }
}
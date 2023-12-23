// loja.page.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { DetalhesCompraPage } from '../detalhes-compra/detalhes-compra.page';



// product.model.ts
export interface Product {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}


@Component({
  selector: 'app-loja',
  templateUrl: './loja.page.html',
  styleUrls: ['./loja.page.scss'],
})




export class LojaPage implements OnInit {
  
  products: any[] = [];

  constructor(private apiService: ApiService,private toastController: ToastController,private navCtrl: NavController) { }

  ngOnInit() {
    this.loadProducts();
  }

  

  loadProducts() {
    this.apiService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  comprarProduto(product: any) {
    // Navega para a página de detalhes da compra, passando o produto como parâmetro
    this.navCtrl.navigateForward('/detalhes-compra', {
      queryParams: {
        product: JSON.stringify(product)
      }
    });
 
}}

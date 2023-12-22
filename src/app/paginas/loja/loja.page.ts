// loja.page.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


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
  
  products: Product[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.apiService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}

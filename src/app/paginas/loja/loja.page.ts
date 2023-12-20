import { Component } from '@angular/core';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.page.html',
  styleUrls: ['./loja.page.scss'],
})
export class LojaPage {
  product: any = {
    url_da_imagem: "/assets/img/ondas.jpg", // Insira aqui a URL da imagem
    nome: 'Nome do Produto',
    descricao: 'Descrição do Produto'
  };

  buyProduct(product: any) {
    console.log('Produto comprado:', product);
    // Adicione aqui a lógica para comprar o produto
  }
}

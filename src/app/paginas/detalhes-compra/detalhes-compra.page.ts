import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detalhes-compra',
  templateUrl: './detalhes-compra.page.html',
  styleUrls: ['./detalhes-compra.page.scss'],
})
export class DetalhesCompraPage {
  product: any;
  nomeCartao = '';
  numeroCartao = '';
  cpf = '';
  marcaCartao = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private apiService: ApiService
  ) {
    this.route.queryParams.subscribe((params: any) => {
      if (params && params.product) {
        this.product = params.product;
      }
    });
  }

  finalizarCompra() {
    const currentUser = this.apiService.currentUserValue;

    if (!currentUser || typeof currentUser !== 'object' || !('username' in currentUser)) {
      return; // Se o usuário não for válido, saia da função
    }

    const dbUrl = 'http://localhost:3000/login';

    this.http.get<any[]>(dbUrl).subscribe(
      (data: any[]) => {
        const userIndex = data.findIndex((user: any) => user.username === currentUser.username);

        if (userIndex !== -1) {
          data[userIndex].compras = data[userIndex].compras || [];
          data[userIndex].compras.push({
            produto: this.product,
            nomeCartao: this.nomeCartao,
            numeroCartao: this.numeroCartao,
            cpf: this.cpf,
            marcaCartao: this.marcaCartao,
          });

          this.http.put(dbUrl, data).subscribe(
            () => console.log('Informações de compra salvas com sucesso no db.json.'),
            (error) => console.error('Erro ao salvar informações de compra:', error)
          );
        }
      },
      (error) => console.error('Erro ao buscar dados do usuário:', error)
    );
  }



  validateCardHolderName(event: any) {
    const regex = /^[a-zA-Z\s]*$/; // Aceita apenas letras e espaços
  
    if (!regex.test(event.target.value)) {
      // Se o valor não corresponder ao padrão (letras e espaços)
      event.target.value = event.target.value.replace(/[^a-zA-Z\s]/g, ''); // Remove caracteres não permitidos
    }
  }
  

  validateCardNumber(event: any) {
    let cardNumber = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
  
    // Limita a quantidade de caracteres no número do cartão
    const maxLength = 16;
    cardNumber = cardNumber.substring(0, maxLength);
  
    // Formata o número do cartão
    let formatted = '';
    for (let i = 0; i < cardNumber.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formatted += ' '; // Adiciona um espaço a cada 4 caracteres
      }
      formatted += cardNumber[i];
    }
  
    // Atualiza o valor no campo de entrada
    event.target.value = formatted;
  }

  validateCPF(event: any) {
    let cpf = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
  
    // Limita a quantidade de caracteres no CPF
    const maxLength = 11;
    cpf = cpf.substring(0, maxLength);
  
    // Formata o CPF no padrão com pontos e traço
    let formatted = '';
    for (let i = 0; i < cpf.length; i++) {
      if (i === 3 || i === 6) {
        formatted += '.';
      } else if (i === 9) {
        formatted += '-';
      }
      formatted += cpf[i];
    }
  
    // Atualiza o valor no campo de entrada
    event.target.value = formatted;
  }
  
  
  

}

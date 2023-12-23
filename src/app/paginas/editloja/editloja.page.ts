import { Component, OnInit, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

interface Product {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

@Component({
  selector: 'app-editloja',
  templateUrl: './editloja.page.html',
  styleUrls: ['./editloja.page.scss'],
})
export class EditlojaPage implements OnInit {
  products: Product[] = [];
  productEdit: Product | null = null;

  constructor(private apiService: ApiService, private elementRef: ElementRef) {}

  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.apiService.getProducts().subscribe(
      (response: any) => {
        this.products = response.products;
      },
      (error: any) => {
        console.error('Erro ao carregar produtos:', error);
      }
    );
  }

  editarProduto(produto: Product) {
    this.productEdit = { ...produto };
    const element = this.elementRef.nativeElement.querySelector('#listEdit');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  cancelar() {
    this.productEdit = null;
  }

  salvarEdicao() {
    if (this.productEdit) {
      this.apiService.atualizarProduto(this.productEdit.id, this.productEdit).subscribe(
        (response) => {
          console.log('Produto atualizado com sucesso:', response);
          this.carregarProdutos();
          this.cancelar();
        },
        (error) => {
          console.error('Erro ao atualizar produto:', error);
        }
      );
    }
  }

  excluirProduto(produto: Product) {
    if (produto) {
      this.apiService.excluirProduto(produto.id).subscribe(
        () => {
          console.log(`Produto com ID ${produto.id} excluído com sucesso`);
          this.carregarProdutos();
          this.cancelar();
        },
        (error) => {
          console.error('Erro ao excluir produto:', error);
        }
      );
    }
  }
}

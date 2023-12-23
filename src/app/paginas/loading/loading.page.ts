import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // Aqui você pode realizar operações de inicialização, como carregar dados, inicializar serviços, etc.
    setTimeout(() => {
      this.router.navigate(['/login']); // Navega para a próxima página após um determinado tempo
    }, 3000); // Tempo de espera (em milissegundos) antes de mudar para a próxima tela
  }
}

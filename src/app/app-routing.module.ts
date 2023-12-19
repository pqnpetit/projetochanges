import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./paginas/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./paginas/cadastro/cadastro.module').then(m => m.CadastroPageModule)
  },
  {
    path: 'pesquisar',
    loadChildren: () => import('./paginas/pesquisar/pesquisar.module').then( m => m.PesquisarPageModule)
  },
  {
    path: 'loja',
    loadChildren: () => import('./paginas/loja/loja.module').then( m => m.LojaPageModule)
  },
  {
    path: 'configuracao',
    loadChildren: () => import('./paginas/configuracao/configuracao.module').then( m => m.ConfiguracaoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

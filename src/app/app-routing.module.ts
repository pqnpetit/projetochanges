import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loading', // Redireciona para a página de login
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then(m => m.LoginPageModule),
    data: {
      hideTabs: true // Identificador para ocultar os tabs nesta página
    }
  },
  {
    path: 'home',
    loadChildren: () => import('./paginas/home/home.module').then( m => m.HomePageModule)
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
  },
  {
    path: 'administrator',
    loadChildren: () => import('./paginas/administrator/administrator.module').then( m => m.AdministratorPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./paginas/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./paginas/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./paginas/loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'editloja',
    loadChildren: () => import('./paginas/editloja/editloja.module').then( m => m.EditlojaPageModule)
  },
  {
    path: 'detalhes-compra',
    loadChildren: () => import('./paginas/detalhes-compra/detalhes-compra.module').then( m => m.DetalhesCompraPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

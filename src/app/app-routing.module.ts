import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatPage } from './paginas/chat/chat.page'; // Verifique o caminho correto do seu arquivo

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
  },
  {
    path: 'profiletest',
    loadChildren: () => import('./paginas/profiletest/profiletest.module').then( m => m.ProfiletestPageModule)
  },
  {
    path: 'planos',
    loadChildren: () => import('./paginas/planos/planos.module').then( m => m.PlanosPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./paginas/feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./paginas/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./paginas/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'friends',
    loadChildren: () => import('./paginas/friends/friends.module').then( m => m.FriendsPageModule)
  },
  {
    path: 'inbox',
    loadChildren: () => import('./paginas/inbox/inbox.module').then( m => m.InboxPageModule)
  },
  {
    path: 'chat/:username', // Este é um exemplo de como capturar um parâmetro na rota
    component: ChatPage,
  },
  {
    path: 'conversations',
    loadChildren: () => import('./paginas/conversations/conversations.module').then( m => m.ConversationsPageModule)
  },
  { path: 'chat/:friendId', component: ChatPage }, // Rota para a página de chat com parâmetro do ID do amigo

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

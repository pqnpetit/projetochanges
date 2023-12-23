import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditlojaPage } from './editloja.page';

const routes: Routes = [
  {
    path: '',
    component: EditlojaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditlojaPageRoutingModule {}

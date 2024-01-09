import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfiletestPage } from './profiletest.page';

const routes: Routes = [
  {
    path: '',
    component: ProfiletestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfiletestPageRoutingModule {}

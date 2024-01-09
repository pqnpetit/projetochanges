import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfiletestPageRoutingModule } from './profiletest-routing.module';

import { ProfiletestPage } from './profiletest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfiletestPageRoutingModule
  ],
  declarations: [ProfiletestPage]
})
export class ProfiletestPageModule {}

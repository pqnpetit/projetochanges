import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditlojaPageRoutingModule } from './editloja-routing.module';

import { EditlojaPage } from './editloja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditlojaPageRoutingModule
  ],
  declarations: [EditlojaPage]
})
export class EditlojaPageModule {}

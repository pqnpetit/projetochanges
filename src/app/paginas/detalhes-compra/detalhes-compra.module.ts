import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesCompraPageRoutingModule } from './detalhes-compra-routing.module';

import { DetalhesCompraPage } from './detalhes-compra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesCompraPageRoutingModule
  ],
  declarations: [DetalhesCompraPage]
})
export class DetalhesCompraPageModule {}

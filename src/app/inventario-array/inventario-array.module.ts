import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventarioArrayPageRoutingModule } from './inventario-array-routing.module';

import { InventarioArrayPage } from './inventario-array.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventarioArrayPageRoutingModule
  ],
  declarations: [InventarioArrayPage]
})
export class InventarioArrayPageModule {}

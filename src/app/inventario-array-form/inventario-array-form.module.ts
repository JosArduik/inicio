import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventarioArrayFormPageRoutingModule } from './inventario-array-form-routing.module';

import { InventarioArrayFormPage } from './inventario-array-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventarioArrayFormPageRoutingModule
  ],
  declarations: [InventarioArrayFormPage]
})
export class InventarioArrayFormPageModule {}

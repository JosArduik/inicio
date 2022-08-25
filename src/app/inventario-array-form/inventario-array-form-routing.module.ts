import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventarioArrayFormPage } from './inventario-array-form.page';

const routes: Routes = [
  {
    path: '',
    component: InventarioArrayFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioArrayFormPageRoutingModule {}

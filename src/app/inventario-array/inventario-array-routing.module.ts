import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventarioArrayPage } from './inventario-array.page';

const routes: Routes = [
  {
    path: '',
    component: InventarioArrayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioArrayPageRoutingModule {}

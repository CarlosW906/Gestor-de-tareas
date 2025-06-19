import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TareaDetallespage } from './tarea-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: TareaDetallespage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TareaDetallesPageRoutingModule {}

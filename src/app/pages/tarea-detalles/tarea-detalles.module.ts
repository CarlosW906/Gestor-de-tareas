import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TareaDetallesPageRoutingModule } from './tarea-detalles-routing.module';

import {TareaDetallespage} from './tarea-detalles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TareaDetallesPageRoutingModule
  ],
  declarations: [TareaDetallespage]
})
export class TareaDetallesPageModule {}

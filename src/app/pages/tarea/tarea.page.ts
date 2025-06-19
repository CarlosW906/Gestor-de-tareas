import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.page.html',
  styleUrls: ['./tarea.page.scss'],
  standalone: false
})
export class TareaPage {
  nombre = '';
  descripcion = '';
  fecha = '';

  fechaMinima = new Date().toISOString();
  fechaMaxima = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString();

  constructor(private tareaService: TareaService, private router: Router) {}

  guardarTarea() {
    if (!this.nombre || !this.descripcion || !this.fecha || new Date(this.fecha) <= new Date()) {
      alert('Rellena todos los campos con valores válidos o no podrá proceder');
      return;
    }

    this.tareaService.agregarTarea({
      nombre: this.nombre,
      descripcion: this.descripcion,
      fecha: this.fecha
    });

    this.router.navigate(['/home']);
  }
   regresarAlHome() {
  this.router.navigate(['/home']);
}

  cancelar() {
    this.router.navigate(['/home']);
  }
}

import { Component, OnInit } from '@angular/core';
import { TareaService } from 'src/app/services/tarea.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone : false
})
export class HomePage implements OnInit { 
  tareas: any[] = [];

  constructor(private tareaService: TareaService, private router: Router) {}

  ngOnInit() {
    this.tareas = this.tareaService.obtenerTareas();
  }

  irACrearTarea() {
    this.router.navigate(['/tarea']);
  }

  verDetalles(id: number) {
    this.router.navigate(['/tarea-detalles', id]);
  }
}

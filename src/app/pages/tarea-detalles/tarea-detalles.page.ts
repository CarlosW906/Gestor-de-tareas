import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-tarea-detalles',
  templateUrl: './tarea-detalles.page.html',
  styleUrls: ['./tarea-detalles.page.scss'],
  standalone: false
})
export class TareaDetallespage implements OnInit {
  tarea: any;
  index: number = -1;

  constructor(private route: ActivatedRoute, private router: Router, private tareaService: TareaService) {}

  ngOnInit() {
    this.index = +this.route.snapshot.paramMap.get('id')!;
    this.tarea = this.tareaService.obtenerTareas()[this.index];
  }

  guardarCambios() {
    this.tareaService.actualizarTarea(this.index, this.tarea);
    this.router.navigate(['/home']);
  }

  cancelar() {
    this.router.navigate(['/home']);
  }

  eliminarTarea() {
    this.tareaService.eliminarTarea(this.index);
    this.router.navigate(['/home']);
  }
  regresarAlHome() {
  this.router.navigate(['/home']);
}

}

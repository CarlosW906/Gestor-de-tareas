import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private clave = 'tareas';

  obtenerTareas() {
    return JSON.parse(localStorage.getItem(this.clave) || '[]');
  }

  agregarTarea(tarea: any) {
    const tareas = this.obtenerTareas();
    tareas.push(tarea);
    localStorage.setItem(this.clave, JSON.stringify(tareas));
  }

  obtenerTarea(index: number) {
    const tareas = this.obtenerTareas();
    return tareas[index];
  }

  actualizarTarea(index: number, tarea: any) {
    const tareas = this.obtenerTareas();
    tareas[index] = tarea;
    localStorage.setItem(this.clave, JSON.stringify(tareas));
  }

  eliminarTarea(index: number) {
    const tareas = this.obtenerTareas();
    tareas.splice(index, 1);
    localStorage.setItem(this.clave, JSON.stringify(tareas));
  }
}

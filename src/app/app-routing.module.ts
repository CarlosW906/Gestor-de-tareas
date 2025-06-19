
import { Routes, RouterModule } from '@angular/router';  // <-- este es el que te falta
import { NgModule } from '@angular/core'; // <-- este es el que te falta
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',   // sin ID
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tarea',  // sin ID
    loadChildren: () => import('./pages/tarea/tarea.module').then( m => m.TareaPageModule)
  },
  {
    path: 'tarea-detalles/:id',  // solo esta lleva ID
    loadChildren: () => import('./pages/tarea-detalles/tarea-detalles.module').then( m => m.TareaDetallesPageModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

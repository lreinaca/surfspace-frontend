import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home} from './atomic/pages/home/home'; // <-- importa el componente

const routes: Routes = [
  { path: '', component: Home }, // ruta principal
  { path: '**', redirectTo: '' } // cualquier ruta desconocida regresa a inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

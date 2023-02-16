import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaNotasComponent } from './lista-notas/lista-notas.component';
import { NotaDetalleComponent } from './nota-detalle/nota-detalle.component';


const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: ListaNotasComponent},
  {path:'detalle-nota', component: NotaDetalleComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

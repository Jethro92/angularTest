import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListNotesComponent } from './list-notes/list-notes.component';
import { DetailNoteComponent } from './detail-note/detail-note.component';


const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: ListNotesComponent},
  {path:'detalle-nota', component: DetailNoteComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

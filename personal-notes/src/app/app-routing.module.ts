import { ProtectedComponent } from './components/protected/protected.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule, Component } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ListNotesComponent } from './components/list-notes/list-notes.component'
import { DetailNoteComponent } from './components/detail-note/detail-note.component'
import { LoggedUserGuard } from './guards/logged-user/logged-user.guard';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component:ListNotesComponent},
  {path:'detalle-nota', loadChildren: () => import('./components/detail-note/detail-note.component').then(m => m.DetailNoteComponent)},
  {path:'protected', canActivate: [LoggedUserGuard], component:ProtectedComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { Nota } from '../models/nota.models';

@Component({
  selector: 'app-lista-notas',
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.scss']
})
export class ListaNotasComponent {

  notas: Nota[];

  constructor(){
    this.notas = [];
  }

  guardar(titulo:string, nota:string):boolean{
    this.notas.push(new Nota(titulo,nota));
    return false
  }

}

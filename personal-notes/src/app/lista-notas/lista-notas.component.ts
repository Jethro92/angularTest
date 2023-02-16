import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Nota } from '../models/nota.model';

@Component({
  selector: 'app-lista-notas',
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.scss']
})
export class ListaNotasComponent{

  notas: Nota[];


  constructor(){
    this.notas = [];
  }

  guardarNota(nota:Nota){
    this.notas.push(nota);
  }

  noteSelected(note:Nota){
    this.notas.forEach((x)=>{
      x.setSelected(false);
    })
    note.setSelected(true);
  }

}

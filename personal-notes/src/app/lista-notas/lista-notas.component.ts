import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Nota } from '../models/nota.model';

@Component({
  selector: 'app-lista-notas',
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.scss']
})
export class ListaNotasComponent implements OnInit{

  NotesForm!: FormGroup;
  notas: Nota[];
  isDisabled: boolean = true;

  constructor(private formBuilder: FormBuilder){
    this.notas = [];
  }

  ngOnInit() {

    this.NotesForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      nota: ['', Validators.required]
    });

    this.NotesForm.valueChanges.subscribe((x) => {
      this.isDisabled = !this.NotesForm.valid;
    });

  }

  guardar(titulo:string, nota:string):boolean{
    this.notas.push(new Nota(titulo,nota));
    return false
  }

}

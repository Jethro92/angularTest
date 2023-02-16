import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Nota } from '../models/nota.model';

@Component({
  selector: 'app-form-nota',
  templateUrl: './form-nota.component.html',
  styleUrls: ['./form-nota.component.scss']
})
export class FormNotaComponent {

  @Output() onItemAdded = new EventEmitter<Nota>;
  NotesForm!: FormGroup;
  isDisabled: boolean = true;

  constructor(private formBuilder:FormBuilder){
    this.onItemAdded = new EventEmitter();
  }

  ngOnInit() {

    this.NotesForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      nota: ['', Validators.required]
    });

    this.NotesForm.valueChanges.subscribe((x) => {
      console.log("cambiaron los valores del form");
      //this.isDisabled = !this.NotesForm.valid;
    });

  }

  guardar(titulo:string, nota:string):boolean{
    let nuevaNota:Nota = new Nota(titulo, nota);
    this.onItemAdded.emit(nuevaNota);
    return false;
  }

  // onItemAdded(nota:Nota){
  //   return nota;
  // }

}

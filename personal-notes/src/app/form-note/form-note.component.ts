import { _ClassColors } from '../models/class-color.model';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Note } from '../models/note.model';

@Component({
  selector: 'app-form-note',
  templateUrl: './form-note.component.html',
  styleUrls: ['./form-note.component.scss']
})
export class FormNoteComponent {

  @Output() onItemAdded = new EventEmitter<Note>;
  NotesForm!: FormGroup;
  isDisabled: boolean = true;

  constructor(private formBuilder:FormBuilder){
    this.onItemAdded = new EventEmitter();
  }

  ngOnInit() {

    this.NotesForm = this.formBuilder.group({
      title: ['', Validators.required],
      note: ['', Validators.required]
    });

    this.NotesForm.valueChanges.subscribe((x) => {
      // console.log("cambiaron los valores del form");
    });

  }

  save(title:string, note:string):boolean{
    let newNote:Note = new Note(title, note);
    newNote.setColor(_ClassColors.yellow);
    this.onItemAdded.emit(newNote);
    return false;
  }

  // onItemAdded(note:Note){
  //   return note;
  // }

}

import { NotesApiClient } from '../models/notes-api-client.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Note } from '../models/note.model';
import { AppState } from '../app.module';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.scss']
})
export class ListNotesComponent{
  //notes: Note[];
  updates:string[];


  constructor(public notesApiClient:NotesApiClient, private store:Store<AppState>){
    //this.notes = [];
    this.updates = [];

    this.store.select(state => state.notes.important)

    this.notesApiClient.subscribeOnChange((note:Note) =>{
      if(note != null){
        this.updates.push(note.title + " has been selected");
      }
    });
  }

  saveNote(note:Note){
    this.notesApiClient.addNote(note);
  }

  noteSelected(note:Note){
    this.notesApiClient.selectNote(note);
  }

}

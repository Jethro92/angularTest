import { NotesApiClient } from '../models/notes-api-client.model';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Note } from '../models/note.model';


@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.scss']
})
export class ListNotesComponent implements OnInit{

  constructor(public notesApiClient:NotesApiClient){
  }

  ngOnInit(){
    //this.notes = this.notesApiClient.getAll();
    return false;
  }

  saveNote(note:Note){
    this.notesApiClient.addNote(note);
    return false;
  }

  noteSelected(note:Note){
    this.notesApiClient.selectNote(note);
    return false;
  }

  getAll():Note[]{
    return this.notesApiClient.getAll();
  }

}

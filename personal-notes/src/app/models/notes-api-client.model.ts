import { Injectable } from '@angular/core';
import {Note} from './note.model';
import { Subject, BehaviorSubject } from 'rxjs';
import { NotesService } from './../services/notes.service';

@Injectable({
  providedIn: 'root'
})
export class NotesApiClient {

  notes: Note[];
  myNote:Note = new Note('', '');
  private current: Subject<Note> = new BehaviorSubject<Note>(this.myNote);

  constructor(private service:NotesService){
    this.notes = [];
  }



  getAll():Note[]{
    // return this.notes;
    this.service.findAll().subscribe((res:Note[]) => this.notes = res);
    return this.notes;
  }

  getById(id:number):Note{
    //return this.notes.filter((note) => {return note.id.toString() === id})[0];
    let note:Note = new Note('', '');
    this.service.findById( id ).subscribe((res:Note) => note = res);
    return note;
  }

  searchNotes (title:string):Note[]{
    //return this.notes.filter((note) => {return note.id.toString() === id})[0];
    let notes:Note[] = [];
    this.service.searchNotesByTitle( title ).subscribe((res:Note[]) => notes = res);
    return notes;
  }

  addNote(note: Note){
    //this.notes.push(note);
    return this.service.addNote(note);
  }

  updateNote(id:number, note:Note):Note{
    //return this.notes.filter((note) => {return note.id.toString() === id})[0];
    let resultNote:Note = new Note('', '');
    this.service.updateNote( id,note ).subscribe((res:Note) => resultNote = res);
    return resultNote;
  }

  deleteNote(id:number){
    //return this.notes.filter((note) => {return note.id.toString() === id})[0];
    this.service.deleteNote( id );

  }

  changeColor(id:string, color:string){
    let note = this.notes.filter((note) => { return note.id === id } )[0];

    //console.log(JSON.stringify(note));
  }


  //metodo que va a generar el evento con el subject
  selectNote(note:Note){
    this.notes.forEach(x => x.setSelected(false));
    note.setSelected(true);
    this.current.next(note);//se crea el evento del subject
  }

  subscribeOnChange(fn:any){
    this.current.subscribe(fn);
  }
}


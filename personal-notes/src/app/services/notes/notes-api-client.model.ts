import { ColorChangeAction, NewNoteAction, SelectedImportantAction, VoteDownAction, VoteUpAction } from '../../state-management/note.actions';
import { Injectable } from '@angular/core';
import {Note} from '../../models/note.model';
import { NotesService } from './notes.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../state-management/notes.reducer';
import { NotesActions } from '../../state-management/note.actions';

@Injectable({
  providedIn: 'root'
})
export class NotesApiClient {

  all:any;
  updates:string[];


  constructor(private service:NotesService, private store:Store<AppState>){
    this.updates = [];

    this.store.select(state => state.notes.important).subscribe(data => {
      const note = data;
      if(note != null){
        this.updates.push(note.title + " has been selected");
      }
    });


    store.select(state => state.notes.items).subscribe(items => this.all = items);
  }

 getAll():Note[]{
    //this.service.findAll().subscribe((res:Note[]) => this.notes = res);

    // console.log(this.notes);
    // return this.notes;
    return this.all;
  }
 /*
  getById(id:number):Note{
   // return this.notes.filter((note) => {return note.id === id})[0];

    // let note:Note = new Note('', '');
    // this.service.findById( id ).subscribe((res:Note) => note = res);
    // return note;
  }

  searchNotes (title:string):Note[]{
   // return this.notes.filter((note) => {return note.title === title});

    // let notes:Note[] = [];
    // this.service.searchNotesByTitle( title ).subscribe((res:Note[]) => notes = res);
    // return notes;
  }*/

  addNote(note: Note){
    //this.notes.push(note);
    note.setSelected(true);
    let id:number = 0;
    this.store.select(state => state.notes.id).subscribe(x => id = x);
    // console.log(id);
    note.setId(id);
    // this.service.addNote(note)

    if(this.service.addNote(note)){
      this.store.dispatch(new NewNoteAction(note));
    }



    //return this.service.addNote(note);
  }

  /*updateNote(id:number, note:Note):Note{
    //return this.notes.filter((note) => {return note.id === id})[0];


    // let resultNote:Note = new Note('', '');
    // this.service.updateNote( id,note ).subscribe((res:Note) => resultNote = res);
    // return resultNote;
  }*/

  deleteNote(id:number){
    //return this.notes.filter((note) => {return note.id === id})[0];

    //this.service.deleteNote( id );

  }

  voteUp(note:Note){

    this.store.dispatch(new VoteUpAction(note));
  }

  voteDown(note:Note){
    this.store.dispatch(new VoteDownAction(note));
  }

  changeColor(note:Note, color:string){
    //let note = this.notes.filter((note) => { return note.id === id } )[0];

    //console.log(JSON.stringify(note));
    this.store.dispatch(new ColorChangeAction(note,color));
  }


  //metodo que va a generar el evento con el subject
  selectNote(note:Note){

    //this.notes.forEach(x => x.setSelected(false));
    this.store.dispatch(new SelectedImportantAction(note));

    //this.current.next(note);//se crea el evento del subject
  }

}


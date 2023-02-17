import { NotesApiClient } from '../models/notes-api-client.model';
import { Component, HostBinding, Input, EventEmitter, Output } from '@angular/core';
import { Note } from '../models/note.model';
import { _ClassColors } from '../models/class-color.model';

@Component({
  selector: 'app-card-note',
  templateUrl: './card-note.component.html',
  styleUrls: ['./card-note.component.scss']
})

export class CardNoteComponent {
  @Input() note!:Note;
  @HostBinding("attr.class") cssClass = 'col-md-3';
  @Output() clicked: EventEmitter<Note>;
  colors:string[];
  classColor!:string;

  constructor(public notesApiClient:NotesApiClient){
    this.colors = Object.values(_ClassColors);
    this.clicked = new EventEmitter();
  }

  ngOnInit(): void {

    this.classColor = this.note.getColor();
  }

  addColorToCard(color:string){
    this.note.setColor(color);
    this.notesApiClient.changeColor(this.note.id,color);
    this.classColor = color;
  }

  ir():boolean{
    this.clicked.emit(this.note);
    return false;
  }
}


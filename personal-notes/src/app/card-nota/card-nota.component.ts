import { Component, HostBinding, Input, EventEmitter, Output } from '@angular/core';
import { Nota } from '../models/nota.model';
import { _ClassColors } from '../models/class-color.model';

@Component({
  selector: 'app-card-nota',
  templateUrl: './card-nota.component.html',
  styleUrls: ['./card-nota.component.scss']
})

export class CardNotaComponent {
  @Input() nota!:Nota;
  @HostBinding("attr.class") cssClass = 'col-md-3';
  @Output() clicked: EventEmitter<Nota>;
  colors:string[];
  classColor:string;

  constructor(){
    this.colors = Object.values(_ClassColors);
    this.classColor = _ClassColors.yellow;
    this.clicked = new EventEmitter();
  }

  addColorToCard(color:string){
    this.classColor = color;
  }

  ir():boolean{
    this.clicked.emit(this.nota);
    return false;
  }
}


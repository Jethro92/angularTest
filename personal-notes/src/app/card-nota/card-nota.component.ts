import { Component, HostBinding, Input } from '@angular/core';
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

  colors:string[];
  classColor:string;

  constructor(){
    this.colors = Object.values(_ClassColors);
    this.classColor = _ClassColors.yellow;
  }

  addColorToCard(color:string){
    this.classColor = color;
  }
}


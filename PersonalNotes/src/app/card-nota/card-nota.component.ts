import { Component, HostBinding, Input } from '@angular/core';
import { Nota } from '../models/nota.models';

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
    this.colors = ["yellow-card", "red-card","green-card","blue-card"];
    this.classColor = this.colors[0];
  }

  addColorToCard(color:string){
    this.classColor = color;
  }
}

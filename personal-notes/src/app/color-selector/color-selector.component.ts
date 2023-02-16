import { Component, EventEmitter, Input, Output } from '@angular/core';
import { _ClassColors } from '../models/class-color.model';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.scss']
})
export class ColorSelectorComponent {
  @Input() color:string = _ClassColors.yellow;
  @Output() colorSelected = new EventEmitter<string>();

  selectColor(){
    this.colorSelected.emit(this.color);
  }
}


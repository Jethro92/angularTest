import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.scss']
})
export class ColorSelectorComponent {
  @Input() color:string = "yellow-card";
  @Output() colorSelected = new EventEmitter<string>();

  selectColor(){
    this.colorSelected.emit(this.color);
  }
}


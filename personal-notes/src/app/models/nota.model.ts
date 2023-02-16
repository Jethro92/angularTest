export class Nota{
  private selected!: boolean;
  private color:string | undefined;

  constructor(public titulo:string, public nota:string){
  }

  setColor(color:string){
    this.color = color;
  }

  isSelected():boolean{
    return this.selected;
  }

  setSelected(selected: boolean){
    this.selected = selected;
  }
}

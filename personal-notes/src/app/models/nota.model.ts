export class Nota{
  private selected!: boolean;
  private color:string | undefined;
  public estados: string[];


  constructor(public titulo:string, public nota:string){
    this.estados = ["In progress", "Suspended", "Finished", "Overdue"];
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

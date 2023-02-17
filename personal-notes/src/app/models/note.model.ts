export class Note{
  private selected!: boolean;
  private color!:string;
  public states: string[];
  public id!: string;

  constructor(public title:string, public content:string){
    this.states = ["In progress", "Suspended", "Finished", "Overdue"];
  }

  setColor(color:string){
    this.color = color;
  }
  getColor():string{
    return this.color;
  }

  isSelected():boolean{
    return this.selected;
  }

  setSelected(selected: boolean){
    this.selected = selected;
  }
}

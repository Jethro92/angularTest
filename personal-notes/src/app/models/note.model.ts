

export class Note{

  color!:string;
  states: string[];
  id!: number;



  constructor(public title:string, public content:string, public selected:boolean = false, public votes: number = 0){
    this.states = ["In progress", "Suspended", "Finished", "Overdue"];
  }

  public setColor(color:string){
    this.color = color;
  }
  public getColor():string{
    return this.color;
  }

  public isSelected():boolean{
    return this.selected;
  }

  public setSelected(selected: boolean){
    this.selected = selected;
  }

  public voteUp(){
    this.votes++;
  }

  public voteDown(){
    this.votes--;
  }

  public setId(id:number){
    this.id = id;
  }

  public getId(){
    return this.id;
  }

}

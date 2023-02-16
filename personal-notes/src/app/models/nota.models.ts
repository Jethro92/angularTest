export class Nota{
  titulo:string;
  nota:string;
  color:string | undefined;

  constructor(titulo:string,nota:string){
    this.titulo = titulo;
    this.nota = nota;
  }

  setColor(color:string){
    this.color = color;
  }
}

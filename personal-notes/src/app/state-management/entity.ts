import { Note } from "../models/note.model";


//store
export interface NotesState{
  items:Note[];
  loading:boolean;
  important: Note | undefined;
  id:number;
}

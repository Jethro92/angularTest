import { Action } from "@ngrx/store";
import { Note } from "../models/note.model";
import { NotesActionTypes } from "./action-types";

export class NewNoteAction implements Action{
  type = NotesActionTypes.NEW_NOTE;
  constructor(public note:Note){}
}

export class SelectedImportantAction implements Action{
  type = NotesActionTypes.SELECTED_IMPORTANT;
  constructor(public note:Note){}
}

export class VoteUpAction implements Action{
  type = NotesActionTypes.VOTE_UP;
  constructor(public note:Note){}
}

export class VoteDownAction implements Action{
  type = NotesActionTypes.VOTE_DOWN;
  constructor(public note:Note){}
}

export class ColorChangeAction implements Action{
  type = NotesActionTypes.COLOR_CHANGE;
  constructor(public note:Note, public color:string){}
}

export type NotesActions = NewNoteAction | SelectedImportantAction | VoteUpAction | VoteDownAction | ColorChangeAction;

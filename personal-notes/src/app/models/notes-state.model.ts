import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import {map} from 'rxjs/operators';
import { Note } from "./note.model";

/*State*/

//store
export interface NotesState{
  items:Note[];
  loading:boolean;
  important: Note | null;
}

export const initializeNoteState = function(){
  return {
    items: [],
    loading: false,
    important: null
  };
}

/*Actions*/
export enum NotesActionTypes{
  NEW_NOTE = '[Notes] New',
  SELECTED_IMPORTANT = "[Notes] Important"
}

export class NewNoteAction implements Action{
  type = NotesActionTypes.NEW_NOTE;
  constructor(public note:Note){}
}

export class SelectedImportantAction implements Action{
  type = NotesActionTypes.SELECTED_IMPORTANT;
  constructor(public note:Note){}
}

export type NotesActions = NewNoteAction | SelectedImportantAction;

/*Reducers*/
export function reducerNotes(
    state:NotesState = initializeNoteState(),
    action:Action
  ):NotesState {
    switch(action.type){
      case NotesActionTypes.NEW_NOTE:{
        return {
          ...state,
          items: [...state.items,(action as NewNoteAction).note]
        };

      }
      case NotesActionTypes.SELECTED_IMPORTANT:{
        state.items.forEach(x => x.setSelected(false));
        const imp: Note = (action as SelectedImportantAction).note;
        imp.setSelected(true);
        return {
          ...state,
          important: imp
        };
      }
      default:
        return state;
    }

}

/*Effects*/
@Injectable()
export class NotesEffects{
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NotesActionTypes.NEW_NOTE),
      map((action:NewNoteAction) => new SelectedImportantAction(action.note))
    )
  )

  constructor(private actions$: Actions) {}
}


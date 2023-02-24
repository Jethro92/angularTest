import { ColorChangeAction, LoadNotesAction } from './note.actions';
import { Injectable } from "@angular/core";
import { Action, ActionReducerMap } from "@ngrx/store";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import {map} from 'rxjs/operators';
import { Note } from "../models/note.model";
import { NewNoteAction, SelectedImportantAction, VoteDownAction, VoteUpAction } from "./note.actions";
import { NotesActionTypes } from "./action-types";
import { NotesState } from "./entity";


export const initializeNoteState = function(){
  return {
    items: [],
    loading: false,
    important: undefined,
    id:0
  };
}


//redux init
export interface AppState{
  notes: NotesState;
}

export const reducers: ActionReducerMap<AppState> = {
  notes: reducerNotes
};

export const reducersInitialState = {
  notes: initializeNoteState()
};
//redux end init



/*Reducers*/
export function reducerNotes(
    state:NotesState = initializeNoteState(),
    action:Action
  ):NotesState {
    switch(action.type){
      case NotesActionTypes.NEW_NOTE:{
        let newId = state.id;
        newId++;

        return {
          ...state,
          items: [...state.items,(action as NewNoteAction).note],
          id: newId
        };

      }
      case NotesActionTypes.SELECTED_IMPORTANT:{
        const imp: Note = (action as SelectedImportantAction).note;
        let newImp:Note = Object.assign({}, imp);
        newImp.selected = true;


        const items:any = state.items.map( item => {
          let isSelected:boolean = item.id === newImp.id? true: false;

          return {
            ...item,
            selected: isSelected
          }
        });

        return {
          ...state,
          items: items,
          important: newImp
        };
      }
      case NotesActionTypes.VOTE_UP:{
        let updatedNote: Note = (action as VoteUpAction).note;
        let newUpdatedNote:Note = Object.assign({}, updatedNote);
        newUpdatedNote.votes++;

        return {
          ...state,
          items: state.items.map((note) => note.id === updatedNote.id ? newUpdatedNote : note)
        };
      }
      case NotesActionTypes.VOTE_DOWN:{
        let updatedNote: Note = (action as VoteDownAction).note;
        let newUpdatedNote:Note = Object.assign({}, updatedNote);
        newUpdatedNote.votes--;

        return { ...state,
          items: state.items.map((note) => note.id === updatedNote.id ? newUpdatedNote:note)
        };
      }

      case NotesActionTypes.COLOR_CHANGE:{
        let updatedNote: Note = (action as VoteDownAction).note;
        let newUpdatedNote:Note = Object.assign({}, updatedNote);
        newUpdatedNote.color = (action as ColorChangeAction).color;

        return { ...state,
          items: state.items.map((note) => note.id === updatedNote.id ? newUpdatedNote:note)
        };
      }
      case NotesActionTypes.LOAD_NOTES:{
        let notes: Note[] = (action as LoadNotesAction).notes;
        let currentImportant: Note = notes.filter((note) => (note.selected))[0];
        return {
          ...state,
          items: notes,
          important: currentImportant
        }
      }

    }
    return state;
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


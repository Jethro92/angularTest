import { ColorChangeAction } from './note.actions';
import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
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


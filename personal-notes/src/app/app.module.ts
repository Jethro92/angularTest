import { NotesService } from './services/notes.service';
import { NotesState, reducerNotes, initializeNoteState, NotesEffects } from './models/notes-state.model';
import { NotesApiClient } from './models/notes-api-client.model';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardNoteComponent } from './card-note/card-note.component';
import { ColorSelectorComponent } from './color-selector/color-selector.component';
import { ListNotesComponent } from './list-notes/list-notes.component';
import { DetailNoteComponent } from './detail-note/detail-note.component';
import { FormNoteComponent } from './form-note/form-note.component';
import { StoreModule as NgRxStoreModule,ActionReducerMap} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

//redux init
export interface AppState{
  notes: NotesState;
}

const reducers: ActionReducerMap<AppState> = {
  notes: reducerNotes
};

let reducersInitialState = {
  notes: initializeNoteState()
};
//redux init finish

@NgModule({
  declarations: [
    AppComponent,
    CardNoteComponent,
    ColorSelectorComponent,
    ListNotesComponent,
    FormNoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgRxStoreModule.forRoot(reducers, { initialState: reducersInitialState}),
    EffectsModule.forRoot(NotesEffects)
  ],
  providers: [
    NotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

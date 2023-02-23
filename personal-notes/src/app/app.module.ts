import { NotesService } from './services/notes.service';
import { reducerNotes, initializeNoteState, NotesEffects } from './state-management/notes.reducer';
import { NotesApiClient } from './models/notes-api-client.model';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardNoteComponent } from './components/card-note/card-note.component';
import { ColorSelectorComponent } from './components/color-selector/color-selector.component';
import { ListNotesComponent } from './components/list-notes/list-notes.component';
import { DetailNoteComponent } from './components/detail-note/detail-note.component';
import { FormNoteComponent } from './components/form-note/form-note.component';
import { StoreModule as NgRxStoreModule,ActionReducerMap, StoreRootModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NotesState } from './state-management/entity';



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
//redux end init


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
    EffectsModule.forRoot([NotesEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    NotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

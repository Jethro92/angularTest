import { NotesService } from './services/notes/notes.service';
import { reducers, reducersInitialState, NotesEffects } from './state-management/notes.reducer';
import { APP_INITIALIZER, InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardNoteComponent } from './components/card-note/card-note.component';
import { ColorSelectorComponent } from './components/color-selector/color-selector.component';
import { ListNotesComponent } from './components/list-notes/list-notes.component';
import { DetailNoteComponent } from './components/detail-note/detail-note.component';
import { FormNoteComponent } from './components/form-note/form-note.component';
import { StoreModule as NgRxStoreModule,ActionReducerMap} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NotesState } from './state-management/entity';
import { LoginComponent } from './components/login/login.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { AuthService } from './services/auth/auth.service';
import { LoggedUserGuard } from './guards/logged-user/logged-user.guard';
import { AppConfig, APP_CONFIG_VALUE } from './../assets/urls/urls';
import { AppInitService } from './services/app-init/app-init.service';



export function init_app(appInitService:AppInitService): () => Promise<any>{
  return () => appInitService.initializeNotesState();

}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');


@NgModule({
  declarations: [
    AppComponent,
    CardNoteComponent,
    ColorSelectorComponent,
    ListNotesComponent,
    FormNoteComponent,
    LoginComponent,
    ProtectedComponent,
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
    NotesService,
    AuthService,
    LoggedUserGuard,
    { provide: APP_CONFIG, useValue: APP_CONFIG_VALUE},
    AppInitService,
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [AppInitService], multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpHeaders, HttpRequest } from '@angular/common/http';
import { LoadNotesAction } from './../../state-management/note.actions';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Note } from 'src/app/models/note.model';
import { AppState } from 'src/app/state-management/notes.reducer';
import { Observable,catchError, throwError } from 'rxjs';
import { APP_CONFIG_VALUE } from 'src/assets/urls/urls';




@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor(private store:Store<AppState>, private http:HttpClient) {  }

  async initializeNotesState(): Promise<any> {
    //const headers: HttpHeaders = new HttpHeaders({'X-API-TOKEN': 'token-seguridad'});
    const response = this.http.get<Note[]>(APP_CONFIG_VALUE.apiEndpoint + "/my").pipe(catchError(this.handleError));
    response.subscribe(notes => this.store.dispatch(new LoadNotesAction(notes)));
  }


  handleError(error:any){
    let errorMessage = "";
    errorMessage = (error.error instanceof ErrorEvent)? error.error.message: `Error Code: ${error.status}\nMessage: ${error.message} `;
    return throwError(()=>{
      return errorMessage;
    })
  }

}





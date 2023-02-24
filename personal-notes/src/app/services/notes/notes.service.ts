
import { Observable } from 'rxjs';
import { forwardRef, Inject, inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { catchError, throwError } from 'rxjs';
import { Note } from '../../models/note.model';
import { APP_CONFIG } from 'src/app/app.module';
import { AppConfig } from 'src/assets/urls/urls';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(public httpClient:HttpClient,
    @Inject( forwardRef(()=> APP_CONFIG)) private config: AppConfig) { }

  findAll() {
    const notes = this.httpClient.get<Note[]>(this.config.apiEndpoint + "/my").pipe(catchError(this.handleError));
    console.log(notes);
    return notes;

  }

  findById(id:number){
    return this.httpClient.get<Note>(this.config.apiEndpoint + "/" + id).pipe(catchError(this.handleError));
  }

  searchNotesByTitle(title:string){
    return this.httpClient.post<Note[]>(this.config.apiEndpoint + "/search", {
      "title":title,
    }).pipe(catchError(this.handleError));
  }

  addNote(note:Note){
    const res = this.httpClient.post<Note>(this.config.apiEndpoint + "/my", {
      "id":note.id,
      "title":note.title,
      "content":note.content,
      "color":note.color,
      "selected":note.selected,
      "votes": note.votes
    }).pipe(
      catchError(this.handleError)
    );

    res.subscribe(x => {console.log(x)});
    return res;
  }

  updateNote(id:number, note:Note){
    return this.httpClient.put<Note>(this.config.apiEndpoint + "/" + id, {
      "title":note.title,
      "content":note.content
    }).pipe(catchError(this.handleError));
  }

  deleteNote(id:number){
    return this.httpClient.delete(this.config.apiEndpoint + "/" + id, {
    }).pipe(catchError(this.handleError));
  }

  handleError(error:any){
    let errorMessage = "";
    errorMessage = (error.error instanceof ErrorEvent)? error.error.message: `Error Code: ${error.status}\nMessage: ${error.message} `;
    return throwError(()=>{
      return errorMessage;
    })
  }
}




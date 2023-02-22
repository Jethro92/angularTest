import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { catchError, throwError } from 'rxjs';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private apiUrl="http://localhost:8080/note";

  constructor(public httpClient:HttpClient) { }

  findAll() {
    const notes = this.httpClient.get<Note[]>(this.apiUrl).pipe(catchError(this.handleError));
    console.log(notes);
    return notes;

  }

  findById(id:number){
    return this.httpClient.get<Note>(this.apiUrl + "/" + id).pipe(catchError(this.handleError));
  }

  searchNotesByTitle(title:string){
    return this.httpClient.post<Note[]>(this.apiUrl + "/search", {
      "title":title,
    }).pipe(catchError(this.handleError));
  }

  addNote(note:Note){
    return this.httpClient.post(this.apiUrl, {
      "title":note.title,
      "content":note.content
    }).pipe(catchError(this.handleError));
  }

  updateNote(id:number, note:Note){
    return this.httpClient.put<Note>(this.apiUrl + "/" + id, {
      "title":note.title,
      "content":note.content
    }).pipe(catchError(this.handleError));
  }

  deleteNote(id:number){
    return this.httpClient.delete(this.apiUrl + "/" + id, {
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


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoItem } from '../shared/models/todoItem';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TodoItemService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<TodoItem[]>{

    let url =  'http://localhost:50214/api/Todo';
  
    return this.http.get<TodoItem[]>(url)
      .pipe(
        tap(usuarios => console.debug(usuarios)),
        catchError(this.handleError('getAll', []))
      );
  }
  save(todoItem:TodoItem): Observable<TodoItem[]>{

    let url =  'http://localhost:50214/api/Todo';
  
    return this.http.post<TodoItem>(url, todoItem)
      .pipe(
        tap(todoItem => console.debug(todoItem)),
        catchError(this.handleError('save', null))
      );
  }
  
/**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}

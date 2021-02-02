import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AcademyService {
  errorMsg:string;
  url = 'https://portfolioapisite.herokuapp.com/api/academy';
  constructor(private httpClient: HttpClient) { }

  getInfoAcademy(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.url).pipe(
      catchError(error => {
        if(error.error instanceof ErrorEvent){
          this.errorMsg = 'Error ${error.error.message}'
        }
        else {
          this.errorMsg = `Error: ${error.message}`;
        }
        console.log(this.errorMsg);
        return of([]);
      }));
  }
}

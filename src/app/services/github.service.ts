import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, pipe, throwError  } from 'rxjs';
import Swal from 'sweetalert2/dist/sweetalert2.js';  

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  url = 'https://api.github.com/users/lsimoes1/repos';

  constructor(private httpClient: HttpClient) { }

  httpOtions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getRepo(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.url);
  }

  getCommit(url: string): Observable<string>{
    return this.httpClient.get<string>(url);
  }
}

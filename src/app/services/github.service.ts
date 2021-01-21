import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';

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
    return this,this.httpClient.get<any[]>(this.url);
  }

}

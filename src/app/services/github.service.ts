import { GitRepository } from './../models/git-repository';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, pipe, throwError, of } from 'rxjs';
import Swal from 'sweetalert2/dist/sweetalert2.js';  

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  // url = 'http://localhost:55526/api/github';
  url = "https://portfolioapisite.herokuapp.com/api/github";
  urlGetToken = 'https://portfolioapisite.herokuapp.com/api/authtoken';
  
  body = {
    "UserID": "usuario01",
    "AccessKey": "94be650011cf412ca906fc335f615cdc"
  }

  errorMsg:string;

  constructor(private httpClient: HttpClient) { }

  getAuthToken(): Observable<any>{
    var header = { 
      headers:new HttpHeaders()
    .set("Access-Control-Allow-Origin", "*")
    .set("Access-Control-Allow-Methods", "PUT,GET,POST,DELETE")
    .set("Access-Control-Allow-Headers", "Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")
    }
    return this.httpClient.post<any>(this.urlGetToken, this.body, header);
  }

  getRepo(token: string): Observable<GitRepository[]>{
    
    var hd = {
      headers: new HttpHeaders()
        .set("Authorization", "Bearer " + token)
     }; 
    return this.httpClient.get<GitRepository[]>(this.url, hd);
  }

  getCommit(url: string): Observable<string>{
    return this.httpClient.get<string>(url);
  }
}


import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AcademyService {
  errorMsg:string;
  
  url = 'https://portfolioapisite.herokuapp.com/api/academy';
  urlGetToken = 'https://portfolioapisite.herokuapp.com/api/authtoken';
  
  body = {
    "UserID": "usuario01",
    "AccessKey": "94be650011cf412ca906fc335f615cdc"
  }
  
  constructor(private httpClient: HttpClient) { }

  getInfoAcademy(token: string): Observable<any[]>{
    var hd = {
      headers: new HttpHeaders()
        .set("Authorization", "Bearer " + token)
     }; 
    return this.httpClient.get<any[]>(this.url, hd);
  }

  getAuthToken(): Observable<any>{
    var header = { 
      headers:new HttpHeaders()
    .set("Access-Control-Allow-Origin", "*")
    .set("Access-Control-Allow-Methods", "PUT,GET,POST,DELETE")
    .set("Access-Control-Allow-Headers", "Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")
    }
    return this.httpClient.post<any>(this.urlGetToken, this.body, header);
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  url = 'https://portfolioapisite.herokuapp.com/api/professional';
  // url = "http://localhost:55526/api/professional"
  
  constructor(private httpClient: HttpClient) { }

  getInfoProfessional(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.url);
  }
}

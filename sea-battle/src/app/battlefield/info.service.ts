import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient) {
   }
  public getInfo() {
    return this.http.get('https://my-json-server.typicode.com/ylia-kanoe/EPM-FE2019/infoBattle');
  }
  
}
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor(private http: HttpClient) {
   }
  public getHelpers() {
    return this.http.get('https://my-json-server.typicode.com/ylia-kanoe/EPM-FE2019/helpers');
  }
  
}

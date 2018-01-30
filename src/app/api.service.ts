import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  public getCharacters(): Observable<any> {
    return this.http.get('https://api.got.show/api/characters/')
      .map(res => res.json());
  }

  public getCities(): Observable<any> {
    return this.http.get('https://api.got.show/api/cities')
      .map(res => res.json())
  }

}

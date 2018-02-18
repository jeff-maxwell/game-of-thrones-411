import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Person } from '../people/person';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  public getCharacters(): Observable<Person[]> {
    return this.http.get<Person[]>('https://api.got.show/api/characters/');
  }

  public getCities(): Observable<any> {
    return this.http.get('https://api.got.show/api/cities');
  }

}

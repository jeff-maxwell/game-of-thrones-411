import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Person } from './person';

@Injectable()
export class PeopleService {
baseURL = 'https://api.got.show/api/characters/';

  constructor(private http: HttpClient) { }

  public getCharacters(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseURL);
  }

  getPerson(id: number): Observable<Person> {
    return this.http.get<Person>(this.baseURL + 'byId/' + id);
  }

  public getProgressData() {

      const req = new HttpRequest('GET', this.baseURL, {
        reportProgress: true
      });

      this.http.request(req).subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('Request sent!');
            break;
          case HttpEventType.ResponseHeader:
            console.log('Response header received!');
            break;
          case HttpEventType.DownloadProgress:
            const kbLoaded = Math.round(event.loaded / 1024);
            const kbTotal = Math.round(event.total / 1024);
            console.log(`Download in progress! ${ kbLoaded }Kb loaded of ${ kbTotal }Kb total`);
            break;
          case HttpEventType.Response:
            console.log('Done!', event.body);
        }
      });
  }

}

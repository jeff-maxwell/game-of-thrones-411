import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {

  constructor(private htttp: Http, private activatedRoute: ActivatedRoute) { }

  private books: any;
  private selectedPerson: any;

  ngOnInit() {
    let personId = this.activatedRoute.snapshot.params['id'];
    this.getPerson(personId).subscribe(person => {this.selectedPerson = person; this.books = person.data.books});
  }

  getPerson(id:number):Observable<any>{
    return this.htttp.get('https://api.got.show/api/characters/byId/' + id)
      .map(res => res.json())
  }

}

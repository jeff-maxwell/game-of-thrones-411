import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../person';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {

  constructor(private peopleService: PeopleService, private activatedRoute: ActivatedRoute) { }

  private books: any;
  selectedPerson: Person;

  ngOnInit() {
    const personId = this.activatedRoute.snapshot.params['id'];

    this.peopleService.getPerson(personId)
        .subscribe(
          (person: Person) => {
            this.selectedPerson = person;
            this.books = person.books;
          },
          (err: any) => console.log(err),
          () => console.log('Person Record Received')
        );
  }
}

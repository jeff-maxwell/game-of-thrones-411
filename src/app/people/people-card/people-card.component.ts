import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.css']
})
export class PeopleCardComponent implements OnInit {
@Input() person: Person;

  constructor() { }

  ngOnInit() { }

}

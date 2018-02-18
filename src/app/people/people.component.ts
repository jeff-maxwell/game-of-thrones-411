import { Component, OnInit } from '@angular/core';

import { Person } from './person';
import { PeopleService } from './people.service';
import { PeopleCardComponent } from './people-card/people-card.component';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  characters: Person[];
  searchString: string;

  constructor( private peopleService: PeopleService) { }

  ngOnInit() {
    this.getCharacters();
    // this.getProgressData();
  }

  getCharacters(): void {
    this.peopleService.getCharacters()
      .subscribe(
        (characters: Person[]) => {
          this.characters = characters;
        },
        (err: any) => {
          console.log(err);
          console.log('ERROR');
        },
        () => {
          console.log('Characters Retrieved: ' + this.characters.length);
        }
      );
  }

  getProgressData(): void {
    this.peopleService.getProgressData();
  }
}

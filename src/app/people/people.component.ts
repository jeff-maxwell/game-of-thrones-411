import { Component, OnInit } from '@angular/core';

import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  characters: any;
  searchString: string = "";

  constructor( private apiService: ApiService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(): void {
    this.apiService.getCharacters()
      .subscribe(
        characters => this.characters = characters,
        err => console.log(err)
      );
  }

}

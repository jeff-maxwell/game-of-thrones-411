import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  places: any;
  searchString: string;

  constructor( private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getCities()
      .subscribe(
        places => this.places = places,
        err => console.log(err)
      )
  }

}

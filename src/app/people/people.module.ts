import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PeopleComponent } from './people.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { PeopleCardComponent } from './people-card/people-card.component';
import { PeopleService } from './people.service';
import { SpinnerComponent } from '../shared/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'list', component: PeopleComponent },
      { path: 'detail/:id', component: PeopleDetailComponent }
    ])
  ],
  declarations: [
    PeopleComponent,
    PeopleDetailComponent,
    PeopleCardComponent,
    SpinnerComponent
  ],
    providers: [ PeopleService ]
})
export class PeopleModule { }

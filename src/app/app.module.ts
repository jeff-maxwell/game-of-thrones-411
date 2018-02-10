import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { ApiService } from './shared/api.service';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PeopleComponent } from './people/people.component';
import { PlacesComponent } from './places/places.component';
import { SearchFilterPipe } from './shared/searchFilter.pipe';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PeopleDetailComponent } from './people/people-detail/people-detail.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    //import RouterModule here
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    WelcomeComponent,
    PeopleComponent,
    SearchFilterPipe,
    PlacesComponent,
    NotFoundComponent,
    PeopleDetailComponent,
    SpinnerComponent
  ],
  exports: [
    
  ],  
  providers: [ ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PeopleComponent } from './people/people.component';
import { ApiService } from './api.service';
import { HttpModule } from '@angular/http';
import { SearchFilterPipe } from './shared/searchFilter.pipe';
import { PlacesComponent } from './places/places.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
    
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    WelcomeComponent,
    PeopleComponent,
    SearchFilterPipe,
    PlacesComponent
  ],
  
  providers: [ ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

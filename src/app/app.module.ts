import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiService } from './shared/api.service';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlacesComponent } from './places/places.component';
import { SearchFilterPipe } from './shared/searchFilter.pipe';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PeopleModule } from './people/people.module';
import { ApiInterceptor } from './shared/api.interceptor';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    PeopleModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'people', loadChildren: 'app/people/people.module#PeopleModule' },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    WelcomeComponent,
    SearchFilterPipe,
    PlacesComponent,
    NotFoundComponent,
    MenuComponent
  ],
  exports: [ ],
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

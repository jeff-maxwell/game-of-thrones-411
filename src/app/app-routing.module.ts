import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PeopleComponent } from './people/people.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
     {path: '', component: WelcomeComponent, pathMatch: 'full'},
     {path: 'welcome', redirectTo: ""},
     {path: 'people', component: PeopleComponent},
     {path: 'dashboard', component: DashboardComponent}
    ]),
  ],
  declarations: [

  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
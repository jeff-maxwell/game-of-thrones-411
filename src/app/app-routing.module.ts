import { PeopleDetailComponent } from './people/people-detail/people-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { PeopleComponent } from './people/people.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
	imports: [
		RouterModule.forRoot([
			{ path: '', component: WelcomeComponent, pathMatch: 'full' },
			{ path: 'welcome', redirectTo: "" },
			{ path: 'people', component: PeopleComponent },
			{ path: 'people/:id', component: PeopleDetailComponent },
			{ path: 'dashboard', component: DashboardComponent },
			{ path: '**', component:NotFoundComponent },
		])
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule{}
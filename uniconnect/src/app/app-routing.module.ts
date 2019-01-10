import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {EventsComponent} from "./events/events.component";
import {ACourseComponent} from "./aCourse/acourse.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'events', component: EventsComponent},
  {path: 'acourse', component: ACourseComponent}];

@NgModule({
  imports :[
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}

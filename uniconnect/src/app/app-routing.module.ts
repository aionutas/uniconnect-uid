import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {UsersComponent} from "./users/users.component";
import {HomeComponent} from "./home/home.component";
import {GroupsComponent} from "./groups/groups.component";

const routes: Routes = [{path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UsersComponent},
  {path: 'home', component: HomeComponent},
  {path: 'groups', component: GroupsComponent}];

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

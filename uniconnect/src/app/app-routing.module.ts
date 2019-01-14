import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {EventsComponent} from "./events/events.component";
import {ACourseComponent} from "./aCourse/acourse.component";
import {AskQuestionComponent} from "./askQuestion/askquestion.component";
import {QuestionsComponent} from "./questions/questions.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'events', component: EventsComponent},
  {path: 'acourse', component: ACourseComponent},
  {path: 'askquestions', component: AskQuestionComponent},
  {path: 'questions', component: QuestionsComponent}];

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

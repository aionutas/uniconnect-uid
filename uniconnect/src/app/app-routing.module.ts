import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {UsersComponent} from './users/users.component';
import {HomeComponent} from './home/home.component';
import {EventsComponent} from './events/events.component';
import {ACourseComponent} from './aCourse/acourse.component';
import {AskQuestionComponent} from './askQuestion/askquestion.component';
import {QuestionsComponent} from './questions/questions.component';
import {SurveyComponent} from './survey/survey.component';
import {DriveComponent} from './drive/drive.component';
import {CalendarComponent} from './calendar/calendar.component';
import {ResourcesComponent} from './resources/resources.component';
import {GroupsComponent} from './groups/groups.component';
import {QuotesComponent} from './quotes/quotes.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'events', component: EventsComponent},
  {path: 'acourse', component: ACourseComponent},
  {path: 'askquestions', component: AskQuestionComponent},
  {path: 'questions', component: QuestionsComponent},
  {path: 'survey', component: SurveyComponent},
  {path: 'drive', component: DriveComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'resources', component: ResourcesComponent},
  {path: 'groups', component: GroupsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'quotes', component: QuotesComponent}
];

@NgModule({
  imports: [
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

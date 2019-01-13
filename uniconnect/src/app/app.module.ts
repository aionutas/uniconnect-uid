import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule, MatOptionModule, MatSelectModule,
  MatSnackBarModule
} from "@angular/material";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTreeModule} from '@angular/material/tree';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { SurveyComponent } from './survey/survey.component';
import { DriveComponent } from './drive/drive.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ResourcesComponent } from './resources/resources.component';
import {EventsComponent} from "./events/events.component";
import {ACourseComponent} from "./aCourse/acourse.component";
import {AskQuestionComponent} from "./askQuestion/askquestion.component";
import {QuotesComponent} from './quotes/quotes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SurveyComponent,
    DriveComponent,
    CalendarComponent,
    ResourcesComponent,
    HomeComponent,
    EventsComponent,
    ACourseComponent,
    AskQuestionComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatBadgeModule,
    MatIconModule,
    MatTabsModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatTreeModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

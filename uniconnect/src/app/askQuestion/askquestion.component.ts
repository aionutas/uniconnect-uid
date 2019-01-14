import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {QuestionsComponent} from "../questions/questions.component";
import {MatSnackBar} from "@angular/material";
import {questions} from "../questions/questions.component";

@Component({
  selector: 'app-home',
  templateUrl: './askquestion.component.html',
  styleUrls: ['./askquestion.component.css']
})
export class AskQuestionComponent implements OnInit {
  courses = ['UID', 'PDC', 'IOS'];
  quotes = ['Our greatest glory is not in never falling, but in rising every time we fall',
    'Overcoming procrastination',
    'Cultivating a success mindset.'];
  quote = '';

  @Input() questionsList: QuestionsComponent;

  @Output() childEvent = new EventEmitter();

  constructor(private router: Router,public snackBar: MatSnackBar // pop-ups in current page ( login successfull )
  ) {
  }

  ngOnInit() {
    this.changeQuote();
  }

  changeQuote() {
    this.quote = this.quotes[Math.floor(Math.random()*this.quotes.length)];
  }

  saveQuote(quote) {
    console.log(quote);
    this.childEvent.emit(quote);
  }

  remove() {

  }

  add() {
    this.openSnackBar('Question Sent!', '');
    questions.push("A new question");
    this.router.navigate(['/questions']);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      direction: 'ltr',
      horizontalPosition: 'end',
      verticalPosition: 'bottom'
    });
  }
}

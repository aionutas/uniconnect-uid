import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

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

  @Output() childEvent = new EventEmitter();

  constructor() {
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

}

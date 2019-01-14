import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

export var questions = ['JavaNullPointerException in SpringBoot','Cannot install npm on mac','Linux error on start-up docker'];

@Component({
  selector: 'app-home',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  courses = ['UID', 'PDC', 'IOS'];
  quotes = ['Our greatest glory is not in never falling, but in rising every time we fall',
    'Overcoming procrastination',
    'Cultivating a success mindset.'];
  // questions = ['JavaNullPointerException in SpringBoot','Cannot install npm on mac','Linux error on start-up docker'];
  quote = '';
  questionsList;

  @Output() childEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.changeQuote();
    this.questionsList = questions;
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

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {QuotesService} from "../quotes.service";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courses = ['UID', 'PDC', 'IOS'];
  quotes = ['Our greatest glory is not in never falling, but in rising every time we fall',
    'Overcoming procrastination',
    'Cultivating a success mindset.'];
  quote = '';

  hours=0;
  minutes=2;
  seconds=0;
  timerInterval;

  @Output() childEvent = new EventEmitter();

  constructor(private quotesService: QuotesService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.changeQuote();
  }

  changeQuote() {
    let auxQuote = this.quotes[Math.floor(Math.random()*this.quotes.length)];
    if(auxQuote !== this.quote) {
      this.quote = auxQuote;
    } else {
      this.changeQuote();
    }
  }

  saveQuote(quote) {
    this.childEvent.emit(quote);
    this.quotesService.addQuote(quote);
    this.openSnackBar('Quote added to favourites', '');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      direction: 'ltr',
      horizontalPosition: 'end',
      verticalPosition: 'bottom'
    });
  }

  startTimer(){
    for(let i=0;i< 10; i++) {
      clearInterval(i);
    }
    let that = this;
    this.timerInterval = setInterval(function(){
      if(that.hours === 0 && this.minutes === 0 && this.seconds === 0) {
        clearInterval(that.timerInterval);
        that.openSnackBar('Time is up', '');
      } else {
        if(that.minutes === 0 && that.seconds === 0) {
          that.hours--;
          that.minutes = 59;
          that.seconds = 59;
        }
        else {
          if(that.seconds === 0) {
            that.minutes--;
            that.seconds = 59;
          }
          else {
            that.seconds--;
          }
        }
      }
    }, 1000, that);
  }

  pauseTimer() {
    for(let i=0;i< 100; i++) {
      clearInterval(i);
    }
  }

  restartTimer() {
    for(let i=0;i< 100; i++) {
      clearInterval(i);
    }
    this.hours = 2;
    this.minutes = 0;
    this.seconds = 0;
  }

}

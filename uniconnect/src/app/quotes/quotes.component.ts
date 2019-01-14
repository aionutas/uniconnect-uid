import {Component, OnInit} from '@angular/core';
import {QuotesService} from "../quotes.service";

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  private quotes;

  constructor(private quotesService: QuotesService) {
  }

  ngOnInit() {
    this.quotes = this.quotesService.getQuotes();
  }

  removeQuote(quote) {
    if (this.quotes.length) {
      this.quotes.splice(this.quotes.indexOf(quote), 1);
    }
  }
}

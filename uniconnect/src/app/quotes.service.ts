import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  private savedQuotes = [];
  constructor() { }

  addQuote(quote) {
    console.log('quote');
    !this.savedQuotes.includes(quote) ? this.savedQuotes.push(quote) : '';
    console.log(this.savedQuotes);
  }

  getQuotes() {
    return this.savedQuotes;
  }
}

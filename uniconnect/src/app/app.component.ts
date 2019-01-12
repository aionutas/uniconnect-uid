import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showNavbar = false;
  quotes = [];
  username;
  constructor(private router: Router) {
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        console.log(val.url);
        this.showNavbar = val.url.slice(1) !== 'login';
        this.username = localStorage.getItem('username')
      }
    });
  }

  logout() {
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }

  test(msg){
    console.log(msg);
  }



}

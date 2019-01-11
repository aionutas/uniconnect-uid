import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username;
  public password;

  constructor(
    private router: Router, // page routing system - navigation (after correcet credentials for login -> home)
    public snackBar: MatSnackBar // pop-ups in current page ( login successfull )
  ) {
  }

  ngOnInit() {
    this.username = ''; // init inputs - empty strings
    this.password = '';
  }

  login() {
    if (this.username === 'admin' && this.password === 'admin'
      || this.username === 'andreea' && this.password === 'andreea') {
      this.openSnackBar('Login successfull!', '');
      localStorage.setItem('username', this.username);
      this.router.navigate(['/home']);
    } else {
      this.openSnackBar('Wrong username or password', '');
    }
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

import { Component, OnInit } from '@angular/core';
import {User} from "./user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: User[];
  constructor() {
  }

  ngOnInit() {
    this.generateUserList();
  }
  edit(id: number) {

  }
  generateUserList() {
    this.users = [];

    let user = new User();
    user.id = 0;
    user.firstname = "RARES-SEBASTIAN";
    user.surname = "MOLDOVAN";
    user.avatar = "https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png";
    user.roles = [1];

    this.users[user.id] = user;

    user = new User();
    user.id = 1;
    user.firstname = "IOAN-MARIAN";
    user.surname = "POP";
    user.avatar = "https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png";
    user.roles = [1,2];

    this.users[user.id] = user;
  }
}

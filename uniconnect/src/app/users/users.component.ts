import { Component, OnInit } from '@angular/core';
import {User} from "./user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: User[];
  public allUsers: User[];
  public id;
  public searchName;
  public searchRole;
  public surname;
  public firstName;
  public isStudent;
  public isTeacher;
  public isSecretary;
  constructor() {
  }
  edit(id: number) {
    this.isSecretary = false;
    this.isTeacher = false;
    this.isStudent = false;
    this.id = id;
    this.firstName = this.users[id].firstname;
    this.surname = this.users[id].surname;
    for(let i=0; i<this.users[id].roles.length; i++) {
      if(this.users[id].roles[i] == 0) {
        this.isSecretary = true;
      }
      if(this.users[id].roles[i] == 1) {
        this.isStudent = true;
      }
      if(this.users[id].roles[i] == 2) {
        this.isTeacher = true;
      }
    }

  }
  onSearchChange($event) {
    let newUsers = [];
    for(let i=0; i<this.allUsers.length; i++) {
      if(this.allUsers[i]===undefined)
        continue;
      if(this.allUsers[i].surname.includes(this.searchName.toUpperCase()) || this.allUsers[i].firstname.includes(this.searchName.toUpperCase())) {
        if(this.searchRole===undefined || this.allUsers[i].roles.includes(+this.searchRole))
            newUsers[i] = this.allUsers[i];
      }
    }
    this.users = newUsers;
  }
  validate() {
    if(!this.firstName || !this.surname || (!this.isStudent && !this.isTeacher && !this.isSecretary)){
      return false;
    }
    return true;
  }
  save() {
    if(this.validate()==false) {
      return;
    }
    this.allUsers[this.id].firstname = this.firstName;
    this.allUsers[this.id].surname = this.surname;
    this.allUsers[this.id].roles = [];
    if(this.isStudent) this.allUsers[this.id].roles.push(1);
    if(this.isTeacher) this.allUsers[this.id].roles.push(2);
    if(this.isSecretary) this.allUsers[this.id].roles.push(0);
    this.users[this.id] = this.allUsers[this.id];
    this.onSearchChange(null);
  }
  ngOnInit() {
    this.generateUserList();
    this.allUsers = this.users;
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
    user.firstname = "MARIA";
    user.surname = "POPESCU";
    user.avatar = "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png";
    user.roles = [0];

    this.users[user.id] = user;

    user = new User();
    user.id = 2;
    user.firstname = "IOAN-MARIAN";
    user.surname = "POP";
    user.avatar = "https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png";
    user.roles = [1,2];

    this.users[user.id] = user;

    user = new User();
    user.id = 3;
    user.firstname = "ANDA";
    user.surname = "CRISAN";
    user.avatar = "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png";
    user.roles = [0];

    this.users[user.id] = user;

    user = new User();
    user.id = 4;
    user.firstname = "DORIAN";
    user.surname = "GORGAN";
    user.avatar = "http://cs.utcluj.ro/csd/pics/dgorgan.jpg";
    user.roles = [2];

    this.users[user.id] = user;

    user = new User();
    user.id = 5;
    user.firstname = "IOAN-ALFRED";
    user.surname = "LETIA";
    user.avatar = "http://cs.utcluj.ro/csd/pics/iletia.jpg";
    user.roles = [2];

    this.users[user.id] = user;
  }
  getRoleName(id: number) {
    if(id==0) {
      return 'SECRETARY';
    }
    if(id==1) {
      return 'STUDENT';
    }
    return 'TEACHER';
  }
}


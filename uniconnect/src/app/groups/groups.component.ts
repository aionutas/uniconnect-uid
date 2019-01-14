import { Component, OnInit } from '@angular/core';
import {Post} from "./post";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  public posts;
  public groupId;
  public groups;
  public users;
  public searchedUsers;
  public chosenUsers = [];
  public showForm = false;
  public showCreateForm = false;
  public showAddForm = false;
  public showGroup = false;
  public searchName;
  public groupName;
  public description;
  public usersInGroup;
  public displayedInGroup;
  public searchAddName;
  public searchRole;
  public searchAddUsers;
  constructor() { }

  ngOnInit() {
    this.initializeGroupList();
    this.initializeUserList();
    this.openGroup();
    this.searchedUsers = this.users;
  }
  create() {
    this.showForm = true;
    this.showCreateForm = true;
    this.showAddForm = false;
  }
  closeForm() {
    this.showForm = false;
    this.chosenUsers = [];
    this.showAddForm = false;
    this.showCreateForm = false;
  }
  onSearchChange($event) {
    let newUsers = [];
    for(let i=0; i<this.users.length; i++) {
      if(this.users[i].toLowerCase().includes(this.searchName.toLowerCase())) {
          newUsers[i] = this.users[i];
      }
    }
    this.searchedUsers = newUsers;
  }
  onSearchAddChange($event) {
    let newUsers = [];
    for(let i=0; i<this.users.length; i++) {
      if(this.users[i].toLowerCase().includes(this.searchAddName.toLowerCase())) {
        newUsers[i] = this.users[i];
      }
    }
    this.searchAddUsers = newUsers;
  }
  move(id: number) {
    this.chosenUsers[id] = this.users[id];
  }
  remove(id: number) {
    this.chosenUsers[id] = undefined;
  }
  moveAdd(id: number) {
    if(this.displayedInGroup.includes(this.searchAddUsers[id]))
      return;
    this.displayedInGroup.push(this.searchAddUsers[id]);
  }
  save() {
    this.groups.push(this.groupName);
  }
  public initializeGroupList() {
    this.groups = ['30443 - Students', 'Secretaries AC', '30441 - Students', 'Lab UID - 30444', 'Students AC', 'Secretaries - ETTI',
                    '30411 - Teachers', 'Lab OOP - 30422/2', 'Lab OOP - 30441/1'];
  }
  public initializeUserList() {
    this.users = ['Rares', 'Ana', 'Andra', 'Raul', 'Paul', 'Mihai', 'Marius', 'Andrei'];
  }
  public initializePosts() {
    this.posts = [];
    let post = new Post();
    post.id = 0;
    post.text = "Did anyone find a mouse in room P03 this afternoon?";
    post.date = "Tuesday, January 10 10:30";
    post.user = "Rares Moldovan";
    this.posts[0] = post;
    post = new Post();
    post.id = 1;
    post.text = "When is the CN exam?";
    post.user = "Mihai Muresan";
    post.date = "Tuesday, January 10 08:23";
    this.posts[1] = post;
    post = new Post();
    post.id = 1;
    post.text = "I was wondering about the UID exam the following: what are the main subjects, when is it and how much does the lab" +
      " count for the final grade anyway? The laboratory was quite stressing so I hope it really counts.";
    post.user = "Rares Moldovan";
    post.date = "Monday, January 9 20:20";
    this.posts[2] = post;
  }
  saveUser() {
    this.usersInGroup = this.displayedInGroup;
  }
  openGroup() {
    this.showGroup  = true;
    this.initializePosts();
    this.usersInGroup = ['Rares', 'Ana', 'Andra', 'Raul', 'Paul', 'Mihai'];
    this.displayedInGroup = ['Rares', 'Ana', 'Andra', 'Raul', 'Paul', 'Mihai'];
  }
  addUser() {
    this.chosenUsers = [];
    this.searchAddUsers = this.users;
    this.showForm = true;
    this.showAddForm = true;
    this.showCreateForm = false;
  }
  reloadForm() {
    if (this.showCreateForm) {
      this.groupName = undefined;
      this.description = undefined;
      this.chosenUsers = [];
    } else {
      this.searchAddName = undefined;
      this.searchRole = undefined;
    }

  }
}

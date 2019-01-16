import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) {
  }

  tabs = ['UID', 'DS', 'IOS'];
  contents = ['https://moodle.cs.utcluj.ro/course/view.php?id=129  \nhttps://material.angular.io/components/tabs/overview',
    'https://en.wikipedia.org/wiki/Distributed_computing',
    'http://users.utcluj.ro/~baruch/en/pages/teaching/inputoutput-systems/laboratory.php'];
  selected = new FormControl('New');

  addTab(selectAfterAdding: boolean, title: string) {
    this.tabs.push(title);

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

  save() {
    this.snackBar.open('Content saved', '', {
      duration: 2000
    });
  }

  ngOnInit() {
  }
}

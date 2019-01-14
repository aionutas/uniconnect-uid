import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  display: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onConfirm() {


    this.display = true;
  }
}

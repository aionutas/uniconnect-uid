import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-survey",
  templateUrl: "./survey.component.html",
  styleUrls: ["./survey.component.css"]
})
export class SurveyComponent implements OnInit {
  showNumberOfAnswers = false;
  showTypeOfAnswer = false;
  generateAnswers: string[];
  answerList;
  form: FormGroup;
  questionn: string;
  savedQuestions;
  constructor(private formBuilder: FormBuilder, public snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      question: ["", ""],
      numberOfAnswers: ["", ""],
      typeOfAnswer: ["", ""]
    });
  }
  ngOnInit() {
    this.savedQuestions = [];
    this.showNumberOfAnswers = false;
    this.showTypeOfAnswer = false;
    this.answerList = [];
  }
  get question() {
    return this.form.get("question").value;
  }

  get numberOfAnswers() {
    return this.form.get("numberOfAnswers").value;
  }

  get typeOfAnswer() {
    return this.form.get("typeOfAnswer").value;
  }
  onQuestion() {
    this.showNumberOfAnswers = true;
    this.questionn = this.question;
  }
  onNumberOfAnswers() {
    this.showTypeOfAnswer = true;
  }
  onTypeOfAnswer() {
    this.generateAnswers = [];
    let i;
    for (i = 0; i < this.numberOfAnswers; i++) {
      this.generateAnswers.push(this.typeOfAnswer);
    }
  }
  onConfirm(type, input, index) {
    const answer = {
      type: type,
      answer: input.value
    };
    this.generateAnswers.splice(index, 1);

    this.answerList.push(answer);
  }
  onShowAnswers() {
    this.generateAnswers = undefined;
  }
  onSaveQuestion() {
    const savedQuestions = {
      question: this.question,
      answerList: this.answerList
    };
    this.savedQuestions.push(savedQuestions);
    this.generateAnswers = undefined;
    this.answerList = [];
  }
  onSurveySubmit() {
    this.snackBar.open("Survey Submitted !", "", {
      duration: 2000
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  private formSubmitted;
  private formSubmittedClass;
  fullNameControl: FormGroup;
  firstNamePattern = '[A-Za-zА-Яа-яЁё]+(\s+[A-Za-zА-Яа-яЁё]+)?';
  emailPattern = '^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$';
  numberPattern = '((\\+91-?)|0)?[0-9]{10}$';

  constructor() { }

  ngOnInit() {

    this.fullNameControl = new FormGroup({
      firstName: new FormControl('', Validators.pattern(this.firstNamePattern)),
      email: new FormControl('', Validators.pattern(this.emailPattern)),
      number: new FormControl('', Validators.pattern(this.numberPattern))
    });
  }
  get firstName() {
    return this.fullNameControl.get('firstName');
  }
  get email() {
    return this.fullNameControl.get('email');
  }
  get number() {
    return this.fullNameControl.get('number');
  }
  send() {
    if (this.fullNameControl.status == "VALID") {
      console.log(this.fullNameControl.status, this.fullNameControl.value)
      this.formSubmitted = "Отправлено";
      this.formSubmittedClass = "formSubmittedYes";
    }
    else{
      this.formSubmitted = "Ошибка в заполнении";
      this.formSubmittedClass = "formSubmittedNo";
    }
  }
}

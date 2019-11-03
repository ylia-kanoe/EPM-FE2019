import { Component, OnInit } from '@angular/core';
import { NgModel, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})

export class TemplateDrivenComponent implements OnInit {
  firstNamePattern = '[A-Za-zА-Яа-яЁё]+(\s+[A-Za-zА-Яа-яЁё]+)?';
  emailPattern = '^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$';
  numberPattern = '((\\+91-?)|0)?[0-9]{10}$';
  registration: FormGroup;

  constructor() { }

  ngOnInit() {
    this.registration = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      number: new FormControl()
    });
  }

  send(name:NgModel, email: NgModel, number: NgModel){
   
      console.log(name.model);
      console.log(email.model);
      console.log(number.model);
      console.log(this.registration.status, this.registration.value);
  }


}

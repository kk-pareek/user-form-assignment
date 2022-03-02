import { Component, OnInit } from '@angular/core';
import { UserData } from './user-data';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  condition:boolean = false;

  userData: UserData = new UserData();
  
  constructor() { }

  ngOnInit(): void {
  }

  submitButtonClicked() {
    this.condition = !this.condition;
  }

  resetButtonClicked() {
    this.userData.firstName = '';
    this.userData.lastName = '';
    this.userData.dob = '';
    this.userData.email = '';
  }

}

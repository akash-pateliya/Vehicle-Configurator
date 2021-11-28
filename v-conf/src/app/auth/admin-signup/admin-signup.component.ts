import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['../user-signup/user-signup.component.css']
})
export class AdminSignupComponent implements OnInit {

  firstName = '';
  lastName = '';
  email = '';
  userName = '';
  password = '';

  constructor() { }

  ngOnInit(): void {
  }

}

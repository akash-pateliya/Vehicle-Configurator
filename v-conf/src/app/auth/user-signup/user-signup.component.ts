import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  companyName = '';
  companyAddress = '';
  email = '';
  contactNumber = '';
  userName = '';
  password = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}

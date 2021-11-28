import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { eInfoMessage } from 'src/enums/info.enum';
import { eSuccessMessage } from 'src/enums/success.enum';
import { eWarningMessage } from 'src/enums/warning.enum';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['../user-signup/user-signup.component.css']
})
export class AdminSignupComponent implements OnInit {


  firstName: string = '';
  lastName: string = '';
  email: string = '';
  userName: string = '';
  password: string = '';
  termsAndCondition: boolean = false;
  isValidForm: boolean = true;

  constructor(private toastr: ToastrService, private authService:AuthService, private router:Router) { }

  ngOnInit(): void { 
    this.toastr.info(eInfoMessage.Register);
  }

  onSignup() {
    this.validateForm();
    if (this.isValidForm) {
      this.authService.adminSignUp(this.firstName, this.lastName, this.email, this.userName, this.password)
        .subscribe(data => {
          this.toastr.success(eSuccessMessage.AdminRegistered);
          this.router.navigate(['/auth/admin-signin']);
        },
          error => this.toastr.error(error.statusText));
    }
    this.isValidForm = true;
  }

  validateForm(): void {
    if (this.firstName.length == 0) {
      this.toastr.warning(eWarningMessage.FirstName);
      this.isValidForm = false;
    }

    if (this.lastName.length == 0) {
      this.toastr.warning(eWarningMessage.LastName);
      this.isValidForm = false;
    }

    if (this.email.length == 0) {
      this.toastr.warning(eWarningMessage.Email);
      this.isValidForm = false;
    }

    if (this.userName.length == 0) {
      this.toastr.warning(eWarningMessage.Username);
      this.isValidForm = false;
    }

    if (this.password.length == 0) {
      this.toastr.warning(eWarningMessage.Password);
      this.isValidForm = false;
    }

    if(!this.termsAndCondition){
      this.toastr.warning(eWarningMessage.termsAndCondition);
      this.isValidForm = false;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { eInfoMessage } from 'src/enums/info.enum';
import { eSuccessMessage } from 'src/enums/success.enum';
import { eWarningMessage } from 'src/enums/warning.enum';
import { AuthService } from '../auth.service';

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
  termsAndCondition: boolean = false;
  isValidForm: boolean = true;

  constructor(private toastr: ToastrService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.toastr.info(eInfoMessage.Register);
  }

  onSignup() {
    this.validateForm();
    if (this.isValidForm) {
      this.authService.userSignUp(this.companyName, this.companyAddress, this.email, this.contactNumber, this.userName, this.password)
        .subscribe(data => {
          this.toastr.success(eSuccessMessage.UserRegistered);
          this.router.navigate(['/auth/user-signin']);
        },
          error => this.toastr.error(error.statusText));
    }
    this.isValidForm = true;
  }

  validateForm(): void {
    if (this.companyName.length == 0) {
      this.toastr.warning(eWarningMessage.companyName);
      this.isValidForm = false;
    }

    if (this.companyAddress.length == 0) {
      this.toastr.warning(eWarningMessage.companyAddress);
      this.isValidForm = false;
    }

    if (this.email.length == 0) {
      this.toastr.warning(eWarningMessage.Email);
      this.isValidForm = false;
    }

    if (this.contactNumber.length == 0) {
      this.toastr.warning(eWarningMessage.contactNumber);
      this.isValidForm = false;
    }

    if (this.password.length == 0) {
      this.toastr.warning(eWarningMessage.Password);
      this.isValidForm = false;
    }

    if (this.userName.length == 0) {
      this.toastr.warning(eWarningMessage.Username);
      this.isValidForm = false;
    }

    if (!this.termsAndCondition) {
      this.toastr.warning(eWarningMessage.termsAndCondition);
      this.isValidForm = false;
    }
  }

}

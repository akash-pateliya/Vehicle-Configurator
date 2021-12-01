import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { eErrorMessage } from 'src/enums/errors.enum';
import { eInfoMessage } from 'src/enums/info.enum';
import { eSuccessMessage } from 'src/enums/success.enum';
import { eWarningMessage } from 'src/enums/warning.enum';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['../user-signin/user-signin.component.css']
})
export class AdminSigninComponent implements OnInit {

  userName: string = '';
  password: string = '';

  constructor(private toastr: ToastrService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.toastr.info(eInfoMessage.AdminLogin);
  }

  onSignin() {
    if (this.userName.length == 0 && this.password.length == 0) {
      this.toastr.warning(eWarningMessage.FillAllFields);
    }
    else {
      this.authService.adminSignIn(this.userName, this.password)
        .subscribe(res => {
          this.toastr.success(eSuccessMessage.Welcome + ' ' + res['adminDetails'].firstName + ' ' + res['adminDetails'].lastName)
          sessionStorage['user_name'] = res['adminDetails'].userName;
          sessionStorage['AdminUid'] = res['adminDetails'].adminUid;
          sessionStorage['token'] = res['token'];
          this.router.navigate(['/admin'])
        },
          error => this.toastr.error(error.statusText));
    }
  }

}

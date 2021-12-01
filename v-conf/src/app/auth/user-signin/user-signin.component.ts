import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { eInfoMessage } from 'src/enums/info.enum';
import { eSuccessMessage } from 'src/enums/success.enum';
import { eWarningMessage } from 'src/enums/warning.enum';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent implements OnInit {


  userName: string = '';
  password: string = '';

  constructor(private toastr: ToastrService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.toastr.info(eInfoMessage.UserLogin);
  }

  onSignin() {
    if (this.userName.length == 0 && this.password.length == 0) {
      this.toastr.warning(eWarningMessage.FillAllFields);
    }
    else {
      this.authService.userSignIn(this.userName, this.password)
        .subscribe(res => {
          this.toastr.success(eSuccessMessage.Welcome + ' ' + res['userDetails'].companyName )
          sessionStorage['user_name'] = res['userDetails'].userName;
          sessionStorage['userUid'] = res['userDetails'].adminUid;
          sessionStorage['token'] = res['token'];
          this.router.navigate(['/user'])
        },
          error => this.toastr.error(error.statusText));
    }
  }

}

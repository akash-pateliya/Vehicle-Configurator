import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserSignupComponent } from './user-signup/user-signup.component';


@NgModule({
  declarations: [AuthComponent, AdminSigninComponent, AdminSignupComponent, UserSigninComponent, UserSignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }

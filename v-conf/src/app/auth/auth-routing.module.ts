import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';

import { AuthComponent } from './auth.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserSignupComponent } from './user-signup/user-signup.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'user-signup',
    component: UserSignupComponent
  },
  {
    path: 'user-signin',
    component: UserSigninComponent
  },
  {
    path: 'admin-signup',
    component: AdminSignupComponent
  },
  {
    path: 'admin-signin',
    component: AdminSigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

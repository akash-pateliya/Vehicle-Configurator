import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ePath } from 'src/enums/path.enums';
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
    path: ePath.userSignUp,
    component: UserSignupComponent
  },
  {
    path: ePath.userSignIn,
    component: UserSigninComponent
  },
  {
    path: ePath.adminSignUp,
    component: AdminSignupComponent
  },
  {
    path: ePath.adminSignIn,
    component: AdminSigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

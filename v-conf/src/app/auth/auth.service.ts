import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router:Router) { }

  adminSignUp(firstName: string, lastName: string, email: string, userName: string, password: string) {
    const body = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      userName: userName,
      password: password
    }

    return this.http.post(environment.apiUrl + '/admin/signup', body);
  }

  adminSignIn(userName:string, password: string){
    const body = {
      userName: userName,
      password: password
    }

    return this.http.post(environment.apiUrl + '/admin/signin', body);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // check if user is already logged in
    if (!sessionStorage['token']) {
      // user is not yet logged in
      // force user to login
      this.router.navigate(['/auth/user-signin'])
      return false
    }
    // user is already logged in
    return true
  }
}

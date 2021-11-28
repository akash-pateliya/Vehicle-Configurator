import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

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
}

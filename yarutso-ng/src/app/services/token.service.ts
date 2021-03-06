import { Injectable } from '@angular/core';
import { tokenName } from '@angular/compiler';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {
    login : environment.apiUrlBase + 'index.php/api/login',
    signup : environment.apiUrlBase + 'index.php/api/signup'
  };

  constructor() {
    this.iss.login = environment.apiUrlBase + 'index.php/api/login';
    this.iss.signup = environment.apiUrlBase + 'index.php/api/signup';
  }

  handle(token) {
    this.set(token);
  }

  set(token) {
    localStorage.setItem('token', token);
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
  }

  isValid() {
    const token = this.get();
    if (this.get()) {
      const payload = this.payload(token);

      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }

    return false;
  }

  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }
}

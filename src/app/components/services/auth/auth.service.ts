import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  userLoggedIn() {
    return this.getToken() !== null;
  }

  userLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['index2']);
  }

  userLogin({ email, password }: any): Observable<any> {
    if (email === 'abhinav@gmail.com' && password === 'abhinav123') {
      this.setToken('zyxwvutsrqponmlkjihgfedcba');
      return of({ name: 'Abhinav Kumar Singh', email: 'abhinav@gmail.com' });
    }
    return throwError(new Error('Failed to login'));
  }
}
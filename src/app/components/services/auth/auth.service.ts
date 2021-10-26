import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  setTokenuser(token: string): void {
    localStorage.setItem('token', token);
  }

  getTokenuser(): string | null {
    return localStorage.getItem('token');
  }
  
  setTokenadmin(token: string): void {
    localStorage.setItem('token', token);
  }

  getTokenadmin(): string | null {
    return localStorage.getItem('token');
  }

  
  adminLoggedIn() {
    return this.getTokenadmin() !== null;
  }
  adminLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['index2']);
  }
  userLoggedIn() {
    return this.getTokenuser() !== null;
  }
  userLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['index2']);
  }

  userLogin({ email, password }: any): Observable<any> {
    if (email === 'abhinav@gmail.com' && password === 'abhinav123') {
      this.setTokenuser('zyxwvutsrqponmlkjihgfedcba');
      return of({ name: 'Abhinav Kumar Singh', email: 'abhinav@gmail.com' });
    }
    return throwError(new Error('Failed to login'));
  }

  adminLogin({ email, password }: any): Observable<any> {
    if (email === 'abhinavadmin@gmail.com' && password === 'abhinav123') {
      this.setTokenadmin('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Abhinav Singh', email: 'abhinavadmin@gmail.com' });
    }
    return throwError(new Error('Failed to Admin Login'));
  }
}
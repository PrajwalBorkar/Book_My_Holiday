import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
//import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{ 
  faLock =faLock;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });


  constructor( private auth: AuthService, private router:Router) { }

  ngOnInit()
  {
    if(this.auth.userLoggedIn() )
    {
      this.router.navigate(['home-new']);
    }
  }
  

  userLogin() : void 
  {
    if (this.loginForm.valid)
    {
     this.auth.userLogin(this.loginForm.value).subscribe
      (
        (result) =>{
        this.router.navigate(['home-new']);
          },
      (err: Error) =>
          {
            alert("Email or Password is wrong ");
          }
      );      
    }
  }
}




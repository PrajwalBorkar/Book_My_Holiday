import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
//import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  faLock =faLock;
  adminloginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });


  constructor( private auth: AuthService, private router:Router) { }

  ngOnInit()
  {
    if(this.auth.adminLoggedIn() )
    {
      this.router.navigate(['admin-home']);
    }
  }
  

  adminLogin() : void 
  {
    if (this.adminloginForm.valid)
    {
     this.auth.adminLogin(this.adminloginForm.value).subscribe
      (
        (result) =>{
        this.router.navigate(['admin-home']);
          },
      (err: Error) =>
          {
            alert("Email or Password is //////wrong ");
          }
      );      
    }
  }
}
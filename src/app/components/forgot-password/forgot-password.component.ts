import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public Email='';
    
  constructor( private auth: AuthService, private router:Router,) { }

  ngOnInit()
  {
    if(this.auth.userLoggedIn() )
    {
      this.router.navigate(['/home-new']);
    }
  }

  public onSubmit(): void{
    {
      if (this.Email=='')
      { 
        alert("please enter the Email")
      }
      else
      {
       console.log(this.Email);
       }
        }
  }
}

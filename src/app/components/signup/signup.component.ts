import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import {NgForm} from '@angular/forms';
//import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
   
    faLock =faLock;

    public Name='';
    public Email='' ;
    public Phoneno='';
    public Password= '';
    public CPassword ='' ; 
    
  constructor( private auth: AuthService, private router:Router,) { }

  ngOnInit()
  {
    if(this.auth.userLoggedIn() )
    {
      this.router.navigate(['/home-new']);
    }
  }
  
    // public onSubmit()
    // {
    //   if (this.Name =='') 
    //   {
    //   alert("Please enter your Name");
  
    //   }
    //   else if (this.Email =='') 
    //   {
    //   alert("Please enter your Email");
    //   //signupform.t2.focus();
    //   }
      
    //   else if ( (this.Phoneno.length ) != 10 )
    //   {
    //     alert("Phone no must of 10 digit");
    //   //fdform.t3.focus();
    //   }
    //   else if (this.Password =='' || this.CPassword=='') 
    //  {
    //     alert(" Please enter your Password ");
    //  //fdform.t4.focus(); 
    //   }
    //   else if (this.CPassword != this.Password)
    //   {
    //       alert("Password doesn't match");
    //   //fdform.submit(); 
    //   } 
    //   else
    //   {
    //     alert("Data submitted successfully");
    //   }
    //   }
}
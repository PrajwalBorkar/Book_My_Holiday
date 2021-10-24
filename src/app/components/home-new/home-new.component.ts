import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home-new',
  templateUrl: './home-new.component.html',
  styleUrls: ['./home-new.component.css']
})
export class HomeNewComponent{
  
  constructor( private auth: AuthService, private router:Router,) {}
 
  ngOnInit(): void 
  {
    if(!this.auth.userLoggedIn() )
      {
      this.router.navigate(['/index2']);
      }
  }
 
  
  
}
  


import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor( private auth: AuthService, private router:Router,) {}
 
  ngOnInit(): void 
  {
    if(!this.auth.adminLoggedIn() )
      {
      this.router.navigate(['/index2']);
      }
  }
 
}

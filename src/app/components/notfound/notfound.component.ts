import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor( private auth: AuthService, private router:Router) { }
  ngOnInit()
  {
    if(!this.auth.userLoggedIn() )
    {
      this.router.navigate(['/index2']);
    }
  }
}

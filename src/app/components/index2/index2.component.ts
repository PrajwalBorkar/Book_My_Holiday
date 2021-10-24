import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-index2',
  templateUrl: './index2.component.html',
  styleUrls: ['./index2.component.css']
})
export class Index2Component implements OnInit {

  constructor( private auth: AuthService, private router:Router) { }

  ngOnInit()
  {
    if(this.auth.userLoggedIn() )
    {
      this.router.navigate(['/home-new']);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor( private auth: AuthService, private router:Router) { }

  ngOnInit(): void {
    if(!this.auth.userLoggedIn() )
    {
      this.router.navigate(['/index2']);
    }
  }

}

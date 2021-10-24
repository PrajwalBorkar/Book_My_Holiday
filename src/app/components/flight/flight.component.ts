import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  constructor( private auth: AuthService, private router:Router) { }

  ngOnInit(): void {
    if(!this.auth.userLoggedIn() )
    {
      this.router.navigate(['/index2']);
    }
  }

}

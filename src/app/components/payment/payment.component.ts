import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  
  constructor( private auth: AuthService, private router:Router) { }
  ngOnInit()
  {
    if(!this.auth.userLoggedIn() )
    {
      this.router.navigate(['/index2']);
    }
  }

}

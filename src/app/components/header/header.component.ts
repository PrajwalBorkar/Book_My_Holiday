import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../services/auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    faLock=faLock;
  
  constructor(private auth: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  userLoggedIn() {
    return this.auth.getToken() !== null;
  }
  userLogout() : void {
    this.auth.userLogout();
  }

}
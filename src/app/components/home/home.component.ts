import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  modalRef?: BsModalRef;
  items: any[];
  constructor( private auth: AuthService, private router:Router,private modalService: BsModalService) { 
  this.items = Array(15).fill(0);
  }
 
  ngOnInit(): void {
    if(!this.auth.userLoggedIn() )
    {
      this.router.navigate(['/index2']);
    }
  }

 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}


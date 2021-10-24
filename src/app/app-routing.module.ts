import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FlightComponent } from './components/flight/flight.component';

import { HotelComponent } from './components/hotel/hotel.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { Index2Component } from './components/index2/index2.component';

import { HomeNewComponent } from './components/home-new/home-new.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { AdminComponent } from './components/admin/admin.component';
const routes: Routes = [
  {path:'index2', component:Index2Component},
  {path:'admin', component:AdminComponent},
  {path:'signup', component :SignupComponent },
  {path:'login', component :LoginComponent },
  {path:'forgot-password', component: ForgotPasswordComponent},
  {path:'home-new', component: HomeNewComponent},
  {path:'contact', component : ContactComponent },
  {path:'feedback', component :FeedbackComponent },
  {path:'aboutus', component : AboutusComponent},
  {path:'flight', component :FlightComponent  },
  {path:'hotel', component :HotelComponent  },
  {path:'add-to-cart', component:AddToCartComponent},
 
  {path:'', redirectTo:'/index2', pathMatch:'full'},
  {path: '**', component : NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

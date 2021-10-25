import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FlightComponent } from './components/flight/flight.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { PaymentComponent } from './components/payment/payment.component';
import { Index2Component } from './components/index2/index2.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeNewComponent } from './components/home-new/home-new.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';

import { AuthService } from './components/services/auth/auth.service';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { faLock } from '@fortawesome/free-solid-svg-icons';
//import { SlickCarouselModule } from 'ngx-slick-carousel';  
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FlightComponent,
    SignupComponent,
    LoginComponent,
    HotelComponent,
    FeedbackComponent,
    ContactComponent,
    AboutusComponent,
    NotfoundComponent,
    ForgotPasswordComponent,
    PaymentComponent,
    Index2Component,
    AdminComponent,
    HomeNewComponent,
    AddToCartComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot()
   // SlickCarouselModule,
   //ReactiveFormModule,

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { } 

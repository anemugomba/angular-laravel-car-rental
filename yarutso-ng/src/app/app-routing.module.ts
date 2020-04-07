import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestResetComponent } from './password/request-reset/request-reset.component';
import { ResponseResetComponent } from './password/response-reset/response-reset.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { AllCarsComponent } from './all-cars/all-cars.component';
import { BookingComponent } from './booking/booking.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ThankYouComponent } from './thank-you/thank-you.component';


const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'create-booking', component: BookingComponent},
  {path: 'checkout', component: CheckOutComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'thank-you', component: ThankYouComponent},
  {path: 'admin', component: AdminLayoutComponent , children: [
    { path: 'login', component: LoginComponent, canActivate: [BeforeLoginService] },
    { path: 'signup', component: SignupComponent, canActivate: [AfterLoginService]},
    { path: 'add-car', component: ProfileComponent, canActivate: [AfterLoginService]},
    { path: 'request-password-reset', component: RequestResetComponent , canActivate: [BeforeLoginService]},
    { path: 'response-password-reset', component: ResponseResetComponent , canActivate: [BeforeLoginService]},
    { path: 'all-cars', component: AllCarsComponent , canActivate: [AfterLoginService]},
  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

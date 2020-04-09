import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AdminLayoutComponent } from './site-admin/admin-layout/admin-layout.component';
import { LoginComponent } from './site-admin/login/login.component';
import { SignupComponent } from './site-admin/signup/signup.component';
import { ProfileComponent } from './site-admin/profile/profile.component';
import { RequestResetComponent } from './password/request-reset/request-reset.component';
import { ResponseResetComponent } from './password/response-reset/response-reset.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { AllCarsComponent } from './site-admin/all-cars/all-cars.component';
import { BookingComponent } from './booking/booking.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ValidCheckoutService } from './services/valid-checkout.service';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'create-booking', component: BookingComponent},
  {path: 'checkout', component: CheckOutComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'thank-you', component: ThankYouComponent , canActivate : [ValidCheckoutService]},
  {path: 'admin', component: AdminLayoutComponent , children: [
    { path: 'login', component: LoginComponent, canActivate: [BeforeLoginService] },
    { path: 'signup', component: SignupComponent, canActivate: [AfterLoginService]},
    { path: 'add-car', component: ProfileComponent, canActivate: [AfterLoginService]},
    { path: 'request-password-reset', component: RequestResetComponent , canActivate: [BeforeLoginService]},
    { path: 'response-password-reset', component: ResponseResetComponent , canActivate: [BeforeLoginService]},
    { path: 'all-cars', component: AllCarsComponent , canActivate: [AfterLoginService]},
  ]},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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


const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'admin', component: AdminLayoutComponent , children: [
    { path: 'login', component: LoginComponent, canActivate: [BeforeLoginService] },
    { path: 'signup', component: SignupComponent, canActivate: [AfterLoginService]},
    { path: 'profile', component: ProfileComponent, canActivate: [AfterLoginService]},
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

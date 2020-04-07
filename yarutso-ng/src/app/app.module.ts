import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestResetComponent } from './password/request-reset/request-reset.component';
import { ResponseResetComponent } from './password/response-reset/response-reset.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import { AllCarsComponent } from './all-cars/all-cars.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSortModule  } from '@angular/material/sort';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { SingleCarComponent } from './components/single-car/single-car.component';
import { EditCarComponent } from './components/edit-car/edit-car.component';
import { BookingComponent } from './booking/booking.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS, MatNativeDateModule } from '@angular/material/core';
import { CheckOutComponent } from './check-out/check-out.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SiteNavComponent } from './components/site-nav/site-nav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { ThankYouComponent } from './thank-you/thank-you.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AdminLayoutComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,
    AllCarsComponent,
    SingleCarComponent,
    EditCarComponent,
    BookingComponent,
    CheckOutComponent,
    ContactUsComponent,
    SiteNavComponent,
    ThankYouComponent
  ],
  entryComponents : [
    SingleCarComponent,
    EditCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatBottomSheetModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatGridListModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [
    {provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { CheckNavbarService } from '../services/check-navbar.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  events: string[] = [];
  minDateTo: Date;
  minDateFrom = new Date();
  fromDate: string;
  toDate: string;
  email: string;
  phone: string;
  fullName: string;
  errors = {
    email : false,
    phone : false,
    fromDate : false,
    fullName : false
  };

  userDetails = {
    email : null,
    phone : null,
    fromDate : null,
    toDate : null,
    fullName : null
  };
  constructor(private router: Router, private CheckNav: CheckNavbarService) { }

  ngOnInit(): void {
    this.CheckNav.changeSiteStatus(true);
  }

  getFromDate(event: MatDatepickerInputEvent<Date>) {
    this.minDateTo = new Date(event.value);
    this.serializedDate = new FormControl(this.minDateTo);
    this.fromDate = event.value.toDateString();
    this.toDate = event.value.toDateString();
    this.errors.fromDate = false;
    console.log(this.fromDate);
  }

  getToDate(event: MatDatepickerInputEvent<Date>) {
    this.toDate = event.value.toDateString();
    console.log(this.toDate);
  }

  onSubmit() {

    console.log(this.fromDate);
    if (this.validateEmail(this.email)) {

    } else {
      this.errors.email = true;

    }

    if (this.fromDate) {

    } else {
      this.errors.fromDate = true;
    }

    if (this.fromDate && this.validateEmail(this.email)) {

      this.userDetails.email = this.email;
      this.userDetails.fromDate = this.fromDate;
      this.userDetails.toDate = this.toDate;
      this.userDetails.phone = this.phone;
      this.userDetails.fullName = this.fullName;

      const r = confirm(`Please Confirm your details
      \n Name: ${this.fullName}
      \n Email: ${this.email}
      \n Phone Number: ${this.phone}
      \n From Date: ${this.fromDate}
      \n To Date: ${this.toDate}`);

      if (r == true) {
        localStorage.setItem('userDetails', JSON.stringify(this.userDetails));
        this.router.navigate(['/checkout']);
      } else {

      }

    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
}

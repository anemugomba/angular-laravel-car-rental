import { Component, OnInit } from '@angular/core';
import { CheckNavbarService } from '../services/check-navbar.service';
import { DoReqService } from '../services/do-req.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private CheckNav: CheckNavbarService, private DoReq: DoReqService, private _snackBar: MatSnackBar) { }

  contactUs = {
    name : null,
    email : null,
    subject : null,
    content : null
  };

  error = {
    name : null,
    email : null,
    subject : null,
    content : null
  };

  isLoading = false;
  ngOnInit(): void {
    this.CheckNav.changeSiteStatus(true);
  }

  onSubmit() {
    this.isLoading = true;
    this.DoReq.contactUs(this.contactUs).subscribe((data) => {
      this.isLoading = false;
      this.contactUs = {
        name : null,
        email : null,
        subject : null,
        content : null
      };
      this._snackBar.open('message sent', 'OK', {
        duration: 2000,
      });

    }, (err) => {

    });
  }
}

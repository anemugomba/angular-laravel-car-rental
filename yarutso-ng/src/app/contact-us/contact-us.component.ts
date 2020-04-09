import { Component, OnInit } from '@angular/core';
import { CheckNavbarService } from '../services/check-navbar.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private CheckNav: CheckNavbarService) { }

  ngOnInit(): void {
    this.CheckNav.changeSiteStatus(true);
  }

}

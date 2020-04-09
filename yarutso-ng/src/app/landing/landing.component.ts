import { Component, OnInit } from '@angular/core';
import { CheckNavbarService } from '../services/check-navbar.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  copyrightDate = new Date().getFullYear();
  constructor(private CheckNav: CheckNavbarService) {

  }
  ngOnInit(): void {
    this.CheckNav.changeSiteStatus(true);
  }

}

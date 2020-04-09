import { Component, OnInit } from '@angular/core';
import { CheckNavbarService } from './services/check-navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private CheckNav: CheckNavbarService) {

  }

  public isAtSite: boolean;
  title = 'yarutso-ng';

  ngOnInit(): void {
    this.CheckNav.changeSiteStatus(true);
    this.CheckNav.siteStatus.subscribe(value => this.isAtSite = value);
  }
}

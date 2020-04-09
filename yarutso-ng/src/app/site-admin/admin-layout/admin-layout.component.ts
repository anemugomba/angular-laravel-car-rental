import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CheckNavbarService } from 'src/app/services/check-navbar.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(private CheckNav: CheckNavbarService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.CheckNav.changeSiteStatus(false);
  }, 0);

    this.cd.detectChanges();
  }

}

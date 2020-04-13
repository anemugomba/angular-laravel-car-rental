import { Component, OnInit } from '@angular/core';
import { DoReqService } from '../services/do-req.service';
import { Car } from '../car';
import { environment } from '../../environments/environment';
import { CheckNavbarService } from '../services/check-navbar.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  public imgUrlBase = '';
  loading = true;
  // tslint:disable-next-line:variable-name
  user_preference;
  constructor(private DoReq: DoReqService, private CheckNav: CheckNavbarService) {
      this.imgUrlBase = environment.apiUrlBase + 'img/';
   }

  cars = null;
  isCarsAvailable = false;
  ngOnInit(): void {
    this.CheckNav.changeSiteStatus(true);
    this.DoReq.getCars(null , null, null).subscribe((data) => {
      this.loading = false;
      this.cars = data;
      if (this.cars.length) {
        this.isCarsAvailable = true;
      } else {
        this.isCarsAvailable = false;
      }
    }, (err) => {
      this.isCarsAvailable = false;
      this.loading = false;
      this.cars = [];
    });
  }

  checkOut(car) {
    if ( localStorage.getItem('userDetails') ) {
      this.user_preference = JSON.parse(localStorage.getItem('userDetails'));
      this.user_preference.vehicle_id = car.id;
      this.user_preference.car_name = car.name;
      localStorage.setItem('userDetails', JSON.stringify(this.user_preference));
    } else {
      alert('You cannot checkout without giving us your contact details');
    }
  }
}

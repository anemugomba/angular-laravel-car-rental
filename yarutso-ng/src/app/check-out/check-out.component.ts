import { Component, OnInit } from '@angular/core';
import { DoReqService } from '../services/do-req.service';
import { Car } from '../car';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  public imgUrlBase = '';
  loading = true;
  constructor(private DoReq: DoReqService) {
      this.imgUrlBase = environment.apiUrlBase + 'img/';
   }

  cars = null;
  ngOnInit(): void {
    this.DoReq.getCars(null , null, null).subscribe((data) => {
      this.loading = false;
      this.cars = data;

    });
  }

  close() {

  }
}

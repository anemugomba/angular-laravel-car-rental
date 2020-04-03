import { Component, OnInit } from '@angular/core';
import { DoReqService } from '../services/do-req.service';
import { Car } from '../car';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  constructor(private DoReq: DoReqService) { }

  cars: Car[] = null;
  ngOnInit(): void {
    this.DoReq.getCars(null , null, null).subscribe((data: Car[]) => {
      console.log(data);
      this.cars = data;

    });
  }

}

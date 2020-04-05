import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';
import { Car } from 'src/app/car';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-single-car',
  templateUrl: './single-car.component.html',
  styleUrls: ['./single-car.component.css']
})
export class SingleCarComponent implements OnInit {

  car: Car = null;
  public imgUrlBase = '';
  item = null;
  // tslint:disable-next-line:variable-name
  constructor(private _bottomSheetRef: MatBottomSheetRef<SingleCarComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: Car) {
                this.imgUrlBase = environment.apiUrlBase + 'img/';
               }

  ngOnInit(): void {
    // console.log(this.data);
    this.car = this.data;
  }

  close(): void {
    this._bottomSheetRef.dismiss();
  }
}

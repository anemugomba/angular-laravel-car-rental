import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  constructor() { }

  ngOnInit(): void {
  }

}

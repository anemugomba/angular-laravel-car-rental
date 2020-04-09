import { Component, OnInit } from '@angular/core';
import { DoReqService } from '../services/do-req.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {

  public processing = true;
  public error = false;
  constructor(private DoReq: DoReqService) { }

  ngOnInit(): void {
    this.processing = true;
    this.error = false;
    if ( localStorage.getItem('userDetails') ) {
      const checkoutData = JSON.parse(localStorage.getItem('userDetails'));
      this.DoReq.checkOut(checkoutData).subscribe((d) => {
        this.processing = false;
        localStorage.removeItem('userDetails');
      }, (err) => {
        this.error = true;
        this.processing = false;
      });
    } else {

    }
  }


}

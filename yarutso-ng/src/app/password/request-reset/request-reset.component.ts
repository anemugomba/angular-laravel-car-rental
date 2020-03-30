import { Component, OnInit } from '@angular/core';
import { DoReqService } from 'src/app/services/do-req.service';
import { SnotifyModule, SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

  public form = {
    email : null
  };

  constructor(private DoReq: DoReqService, private notify: SnotifyService, private Notify: SnotifyService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.Notify.info('wait ...', {timeout : 5000});
    this.DoReq.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      err => this.notify.error(err.error.error));
  }

  handleResponse(res) {
    this.Notify.success(res.data, { timeout : 0});
    this.form.email = null;
  }
}

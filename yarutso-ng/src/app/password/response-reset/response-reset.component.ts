import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoReqService } from 'src/app/services/do-req.service';
import { Snotify, SnotifyService } from 'ng-snotify';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {

  error = {
    email : null,
    password : null,
    password_confirmation : null,
    resetToken : null
  };
  form = {
    email : null,
    password : null,
    password_confirmation : null,
    resetToken : null
  };
  constructor(private route: ActivatedRoute,
              private DoReq: DoReqService,
              private router: Router,
              private Notify: SnotifyService) {
    route.queryParams.subscribe(params => this.form.resetToken = params.token);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.Notify.info('processing please wait', {timeout : 0});

    this.DoReq.changePassword(this.form).subscribe(data => this.handleResponse(data),
      error => this.handleError(error));
  }

  handleResponse(res) {
    this.Notify.confirm('done, login with new password', {
      buttons: [
        {text : 'Okay',
        action : toster => {
          this.router.navigateByUrl('/admin/login');
          this.Notify.remove(toster.id);
        }
      }
      ]
    });

  }

  handleError(res) {
    console.log(res);
    this.error = res.error.errors;
  }

}

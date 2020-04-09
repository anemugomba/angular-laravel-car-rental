import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DoReqService } from '../../services/do-req.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form = {
    name : null,
    email : null,
    password : null,
    password_confirmation : null
  };

  public error = {
    name : null,
    email : null,
    password : null,
    password_confirmation : null
  };

  constructor(private DoReq: DoReqService, private Token: TokenService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
      this.DoReq.signup(this.form).subscribe(data => this.handleResponse(data), err => this.handleError(err));
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/admin/profile');
  }
}

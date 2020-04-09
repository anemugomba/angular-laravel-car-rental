import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DoReqService } from '../../services/do-req.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email : null,
    password : null
  };

  public error = null;

  constructor(private DoReq: DoReqService,
              private Token: TokenService,
              private router: Router,
              private Auth: AuthService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.DoReq.login(this.form).subscribe((data) => {
      this.handleResponse(data);
    }, err => this.handleError(err));
  }

  handleResponse(data) {
    console.log(data);
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/admin/all-cars');
  }

  handleError(error) {
    this.error = error.error.error;
  }
}


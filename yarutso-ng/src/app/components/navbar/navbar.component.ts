import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn: boolean;
  constructor(private Auth: AuthService,
              private router: Router,
              private Token: TokenService) { }

  ngOnInit(): void {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
  }

  logout(e: MouseEvent) {
    e.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    // this.Auth.authStatus.subscribe(value => this.loggedIn = value);
    this.router.navigateByUrl('/admin/login');
  }

}

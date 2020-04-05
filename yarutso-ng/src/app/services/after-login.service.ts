import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AfterLoginService implements CanActivate {

  constructor(private Token: TokenService, private router: Router) { }
  canActivate(route: import('@angular/router').ActivatedRouteSnapshot,
              state: import('@angular/router').RouterStateSnapshot): boolean |
              import('@angular/router').UrlTree |
              import('rxjs').Observable<boolean |
              import('@angular/router').UrlTree> |
              Promise<boolean |
              import('@angular/router').UrlTree> {

                if ( !this.Token.loggedIn() ) {
                  this.router.navigate(['/admin/login']);
                }
                return this.Token.loggedIn();
  }
}

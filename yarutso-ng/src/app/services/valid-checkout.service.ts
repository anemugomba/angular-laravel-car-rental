import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ValidCheckoutService implements CanActivate {

  constructor(private router: Router) { }
  canActivate(route: import('@angular/router').ActivatedRouteSnapshot,
              state: import('@angular/router').RouterStateSnapshot): boolean | import('@angular/router').UrlTree | import('rxjs').Observable<boolean | import('@angular/router').UrlTree> | Promise<boolean | import('@angular/router').UrlTree> {
    if ( localStorage.getItem('userDetails') ) {
      if (JSON.parse(localStorage.getItem('userDetails')).vehicle_id) {
        return true;
      }

    } else {
      this.router.navigate(['/create-booking']);
    }

  }
}

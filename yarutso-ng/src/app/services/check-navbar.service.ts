import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckNavbarService {

  private isAtSite = new BehaviorSubject <boolean>(true);
  siteStatus = this.isAtSite.asObservable();

  changeSiteStatus(value: boolean) {
    this.isAtSite.next(value);
  }
  constructor() { }
}

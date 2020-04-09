import { TestBed } from '@angular/core/testing';

import { CheckNavbarService } from './check-navbar.service';

describe('CheckNavbarService', () => {
  let service: CheckNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

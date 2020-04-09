import { TestBed } from '@angular/core/testing';

import { ValidCheckoutService } from './valid-checkout.service';

describe('ValidCheckoutService', () => {
  let service: ValidCheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidCheckoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DoReqService } from './do-req.service';

describe('DoReqService', () => {
  let service: DoReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

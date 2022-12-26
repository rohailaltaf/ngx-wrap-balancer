import { TestBed } from '@angular/core/testing';

import { NgxWrapBalancerService } from './ngx-wrap-balancer.service';

describe('NgxWrapBalancerService', () => {
  let service: NgxWrapBalancerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxWrapBalancerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

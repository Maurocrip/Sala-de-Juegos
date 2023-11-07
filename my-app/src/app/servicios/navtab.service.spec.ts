import { TestBed } from '@angular/core/testing';

import { NavtabService } from './navtab.service';

describe('NavtabService', () => {
  let service: NavtabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavtabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

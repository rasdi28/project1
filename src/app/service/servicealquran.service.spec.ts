import { TestBed } from '@angular/core/testing';

import { ServicealquranService } from './servicealquran.service';

describe('ServicealquranService', () => {
  let service: ServicealquranService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicealquranService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

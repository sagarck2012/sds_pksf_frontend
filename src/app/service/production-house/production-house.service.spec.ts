import { TestBed } from '@angular/core/testing';

import { ProductionHouseService } from './production-house.service';

describe('ProductionHouseService', () => {
  let service: ProductionHouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductionHouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

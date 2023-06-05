import { TestBed } from '@angular/core/testing';

import { DmoveService } from './dmove.service';

describe('DmoveService', () => {
  let service: DmoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DmoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

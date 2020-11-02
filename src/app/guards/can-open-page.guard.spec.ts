import { TestBed } from '@angular/core/testing';

import { CanOpenPageGuard } from './can-open-page.guard';

describe('CanOpenPageGuard', () => {
  let guard: CanOpenPageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanOpenPageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ModalCallService } from './modal-call.service';

describe('ModalCallService', () => {
  let service: ModalCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

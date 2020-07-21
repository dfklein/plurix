import { TestBed } from '@angular/core/testing';

import { ContatoModalService } from './contato-modal.service';

describe('ContatoModalService', () => {
  let service: ContatoModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContatoModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

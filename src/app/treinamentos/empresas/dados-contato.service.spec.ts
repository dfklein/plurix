import { TestBed } from '@angular/core/testing';

import { DadosContatoService } from './dados-contato.service';

describe('DadosContatoService', () => {
  let service: DadosContatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosContatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

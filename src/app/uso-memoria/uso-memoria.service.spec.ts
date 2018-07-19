import { TestBed, inject } from '@angular/core/testing';

import { UsoMemoriaService } from './uso-memoria.service';

describe('UsoMemoriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsoMemoriaService]
    });
  });

  it('should be created', inject([UsoMemoriaService], (service: UsoMemoriaService) => {
    expect(service).toBeTruthy();
  }));
});

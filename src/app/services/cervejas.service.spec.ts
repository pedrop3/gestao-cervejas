import { TestBed, inject } from '@angular/core/testing';

import { CervejasService } from './cervejas.service';

describe('CervejasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CervejasService]
    });
  });

  it('should be created', inject([CervejasService], (service: CervejasService) => {
    expect(service).toBeTruthy();
  }));
});

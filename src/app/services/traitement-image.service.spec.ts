import { TestBed } from '@angular/core/testing';

import { TraitementImageService } from './traitement-image.service';

describe('TraitementImageService', () => {
  let service: TraitementImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraitementImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { BitsNPiecesService } from './bits-n-pieces.service';

describe('BitsNPiecesService', () => {
  let service: BitsNPiecesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BitsNPiecesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

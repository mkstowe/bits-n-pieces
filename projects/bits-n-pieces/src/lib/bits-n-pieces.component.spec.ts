import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitsNPiecesComponent } from './bits-n-pieces.component';

describe('BitsNPiecesComponent', () => {
  let component: BitsNPiecesComponent;
  let fixture: ComponentFixture<BitsNPiecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BitsNPiecesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BitsNPiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

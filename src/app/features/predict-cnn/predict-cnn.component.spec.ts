import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictCnnComponent } from './predict-cnn.component';

describe('PredictCnnComponent', () => {
  let component: PredictCnnComponent;
  let fixture: ComponentFixture<PredictCnnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PredictCnnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredictCnnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

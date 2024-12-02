import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaussianFilterComponent } from './gaussian-filter.component';

describe('GaussianFilterComponent', () => {
  let component: GaussianFilterComponent;
  let fixture: ComponentFixture<GaussianFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaussianFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaussianFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

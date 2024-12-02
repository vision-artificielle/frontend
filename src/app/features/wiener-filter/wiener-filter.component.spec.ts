import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WienerFilterComponent } from './wiener-filter.component';

describe('WienerFilterComponent', () => {
  let component: WienerFilterComponent;
  let fixture: ComponentFixture<WienerFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WienerFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WienerFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

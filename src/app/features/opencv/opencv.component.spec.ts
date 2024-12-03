import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpencvComponent } from './opencv.component';

describe('OpencvComponent', () => {
  let component: OpencvComponent;
  let fixture: ComponentFixture<OpencvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpencvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpencvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

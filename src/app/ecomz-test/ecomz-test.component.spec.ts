import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomzTestComponent } from './ecomz-test.component';

describe('EcomzTestComponent', () => {
  let component: EcomzTestComponent;
  let fixture: ComponentFixture<EcomzTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcomzTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcomzTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

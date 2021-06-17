import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomzExecutionComponent } from './ecomz-execution.component';

describe('EcomzExecutionComponent', () => {
  let component: EcomzExecutionComponent;
  let fixture: ComponentFixture<EcomzExecutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcomzExecutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcomzExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

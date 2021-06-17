import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomzFooterComponent } from './ecomz-footer.component';

describe('EcomzFooterComponent', () => {
  let component: EcomzFooterComponent;
  let fixture: ComponentFixture<EcomzFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcomzFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcomzFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

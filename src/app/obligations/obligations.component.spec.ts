import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObligationsComponent } from './obligations.component';

describe('ObligationsComponent', () => {
  let component: ObligationsComponent;
  let fixture: ComponentFixture<ObligationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObligationsComponent]
    });
    fixture = TestBed.createComponent(ObligationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

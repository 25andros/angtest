import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhvalsComponent } from './ahvals.component';

describe('AhvalsComponent', () => {
  let component: AhvalsComponent;
  let fixture: ComponentFixture<AhvalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AhvalsComponent]
    });
    fixture = TestBed.createComponent(AhvalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

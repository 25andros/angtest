import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartAComponent } from './part-a.component';

describe('PartAComponent', () => {
  let component: PartAComponent;
  let fixture: ComponentFixture<PartAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartAComponent]
    });
    fixture = TestBed.createComponent(PartAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

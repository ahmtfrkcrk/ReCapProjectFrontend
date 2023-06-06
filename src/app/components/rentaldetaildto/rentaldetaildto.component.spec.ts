import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentaldetaildtoComponent } from './rentaldetaildto.component';

describe('RentaldetaildtoComponent', () => {
  let component: RentaldetaildtoComponent;
  let fixture: ComponentFixture<RentaldetaildtoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentaldetaildtoComponent]
    });
    fixture = TestBed.createComponent(RentaldetaildtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

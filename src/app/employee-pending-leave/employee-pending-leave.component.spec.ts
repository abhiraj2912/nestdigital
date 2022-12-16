import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePendingLeaveComponent } from './employee-pending-leave.component';

describe('EmployeePendingLeaveComponent', () => {
  let component: EmployeePendingLeaveComponent;
  let fixture: ComponentFixture<EmployeePendingLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePendingLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeePendingLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

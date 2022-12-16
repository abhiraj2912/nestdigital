import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeViewLeaveComponent } from './employee-view-leave.component';

describe('EmployeeViewLeaveComponent', () => {
  let component: EmployeeViewLeaveComponent;
  let fixture: ComponentFixture<EmployeeViewLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeViewLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeViewLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewLeaveComponent } from './admin-view-leave.component';

describe('AdminViewLeaveComponent', () => {
  let component: AdminViewLeaveComponent;
  let fixture: ComponentFixture<AdminViewLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

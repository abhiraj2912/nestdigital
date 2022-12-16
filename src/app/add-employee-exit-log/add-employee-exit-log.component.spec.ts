import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeExitLogComponent } from './add-employee-exit-log.component';

describe('AddEmployeeExitLogComponent', () => {
  let component: AddEmployeeExitLogComponent;
  let fixture: ComponentFixture<AddEmployeeExitLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployeeExitLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmployeeExitLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

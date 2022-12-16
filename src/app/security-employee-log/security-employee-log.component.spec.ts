import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityEmployeeLogComponent } from './security-employee-log.component';

describe('SecurityEmployeeLogComponent', () => {
  let component: SecurityEmployeeLogComponent;
  let fixture: ComponentFixture<SecurityEmployeeLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityEmployeeLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityEmployeeLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

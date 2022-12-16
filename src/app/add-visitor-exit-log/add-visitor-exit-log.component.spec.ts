import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVisitorExitLogComponent } from './add-visitor-exit-log.component';

describe('AddVisitorExitLogComponent', () => {
  let component: AddVisitorExitLogComponent;
  let fixture: ComponentFixture<AddVisitorExitLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVisitorExitLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVisitorExitLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

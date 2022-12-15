import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVistorLogComponent } from './add-vistor-log.component';

describe('AddVistorLogComponent', () => {
  let component: AddVistorLogComponent;
  let fixture: ComponentFixture<AddVistorLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVistorLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVistorLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

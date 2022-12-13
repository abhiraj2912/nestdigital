import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVistorLogComponent } from './view-vistor-log.component';

describe('ViewVistorLogComponent', () => {
  let component: ViewVistorLogComponent;
  let fixture: ComponentFixture<ViewVistorLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVistorLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewVistorLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

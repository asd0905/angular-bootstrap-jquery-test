import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbButtonCheckboxComponent } from './ngb-button-checkbox.component';

describe('NgbButtonCheckboxComponent', () => {
  let component: NgbButtonCheckboxComponent;
  let fixture: ComponentFixture<NgbButtonCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbButtonCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbButtonCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

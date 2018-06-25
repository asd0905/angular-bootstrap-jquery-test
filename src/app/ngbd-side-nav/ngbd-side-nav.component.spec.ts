import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdSideNavComponent } from './ngbd-side-nav.component';

describe('NgbdSideNavComponent', () => {
  let component: NgbdSideNavComponent;
  let fixture: ComponentFixture<NgbdSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACourseComponent } from './acourse.component';

describe('ACourseComponent', () => {
  let component: ACourseComponent;
  let fixture: ComponentFixture<ACourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoyoungComponent } from './seoyoung.component';

describe('SeoyoungComponent', () => {
  let component: SeoyoungComponent;
  let fixture: ComponentFixture<SeoyoungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoyoungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoyoungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

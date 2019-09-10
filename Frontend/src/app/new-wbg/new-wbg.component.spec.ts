import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWbgComponent } from './new-wbg.component';

describe('NewWbgComponent', () => {
  let component: NewWbgComponent;
  let fixture: ComponentFixture<NewWbgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewWbgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWbgComponent } from './update-wbg.component';

describe('UpdateWbgComponent', () => {
  let component: UpdateWbgComponent;
  let fixture: ComponentFixture<UpdateWbgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWbgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

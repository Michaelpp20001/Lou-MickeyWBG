import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WbgListComponent } from './wbg-list.component';

describe('WbgListComponent', () => {
  let component: WbgListComponent;
  let fixture: ComponentFixture<WbgListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WbgListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WbgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

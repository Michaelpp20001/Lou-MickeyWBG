import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedWinesComponent } from './deleted-wines.component';

describe('DeletedWinesComponent', () => {
  let component: DeletedWinesComponent;
  let fixture: ComponentFixture<DeletedWinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedWinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedWinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

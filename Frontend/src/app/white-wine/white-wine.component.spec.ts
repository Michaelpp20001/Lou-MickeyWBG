import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteWineComponent } from './white-wine.component';

describe('WhiteWineComponent', () => {
  let component: WhiteWineComponent;
  let fixture: ComponentFixture<WhiteWineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiteWineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteWineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

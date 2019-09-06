import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedWineComponent } from './red-wine.component';

describe('RedWineComponent', () => {
  let component: RedWineComponent;
  let fixture: ComponentFixture<RedWineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedWineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedWineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

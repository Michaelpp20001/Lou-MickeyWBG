import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparklingWineComponent } from './sparkling-wine.component';

describe('SparklingWineComponent', () => {
  let component: SparklingWineComponent;
  let fixture: ComponentFixture<SparklingWineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparklingWineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparklingWineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

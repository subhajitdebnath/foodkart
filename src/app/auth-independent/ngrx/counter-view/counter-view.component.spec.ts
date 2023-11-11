import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterViewComponent } from './counter-view.component';

describe('CounterViewComponent', () => {
  let component: CounterViewComponent;
  let fixture: ComponentFixture<CounterViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterViewComponent]
    });
    fixture = TestBed.createComponent(CounterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

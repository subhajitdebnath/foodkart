import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterControlComponent } from './counter-control.component';

describe('CounterControlComponent', () => {
  let component: CounterControlComponent;
  let fixture: ComponentFixture<CounterControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterControlComponent]
    });
    fixture = TestBed.createComponent(CounterControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAuthComponent } from './post-auth.component';

describe('PostAuthComponent', () => {
  let component: PostAuthComponent;
  let fixture: ComponentFixture<PostAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostAuthComponent]
    });
    fixture = TestBed.createComponent(PostAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { UserService } from './core/services/user.service';

let component: AppComponent;
let fixture: ComponentFixture<AppComponent>;
let userServiceStub: Partial<UserService>;
let userService: any;
let el: any;

describe('AppComponent', ()=> {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [{ provide: UserService, useValue: userServiceStub }],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    userServiceStub = {
      isLoggedIn: true,
      user: {
        name: 'John Doe'
      }
    };

    // UserService from the root injector
    userService = TestBed.inject(UserService);

    //  get the "welcome" element by CSS selector (e.g., by class name)
    el = fixture.nativeElement.querySelector('.welcome');
  });
  
  it('should create an app comp', () => {
    expect(component).toBeTruthy();
  });

  it('should have title Foodcart', () => {
    expect(component.title).toEqual('Foodcart');
  });

  it('should welcome the user', () => {
    fixture.detectChanges();
    const content = el.textContent;
    console.log(content)
    expect(content).withContext('"Welcome ..."').toContain('Welcome');
    expect(content).withContext('expected name').toContain('John Doe');
  });

  it('should welcome "Bubba"', () => {
    userService.user.name = 'Bubba'; // welcome message hasn't been shown yet
    fixture.detectChanges();
    expect(el.textContent).toContain('Bubba');
  });
  
  it('should request login if not logged in', () => {
    userService.isLoggedIn = false; // welcome message hasn't been shown yet
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).withContext('not welcomed').not.toContain('Welcome');
    expect(content)
      .withContext('"log in"')
      .toMatch(/log in/i);
  });

});
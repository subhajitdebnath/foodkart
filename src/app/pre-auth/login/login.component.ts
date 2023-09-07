import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;
  loginFormSubmit = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private lsService: LocalstorageService,
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['kminchelle', Validators.required],
      password: ['0lelplR', Validators.required]
    });
  }

  onSubmit(): void {
    console.log(this.loginForm);

    this.loginFormSubmit = true;
    
    this.authService.login(this.loginForm.value).subscribe(res => {
      console.log(res);
      // save the login Info
      this.lsService.setItem('authData', JSON.stringify(res));

      // changing the auth service user info
      this.authService.checkUserState();

      alert('Login Success');
      this.router.navigate(['']);
    }, err => {
      console.log(err);
    });
  }
}

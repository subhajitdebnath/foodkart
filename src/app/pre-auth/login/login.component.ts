import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

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
    }, err => {
      console.log(err);
    });
  }
}

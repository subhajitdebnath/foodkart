import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm! : FormGroup;
  constructor(
    private formbuilder : FormBuilder
    ){}

ngOnInit(){
 this.registerForm = this.formbuilder.group({
 firstname: [''],
 lastname: [''],
 email: [''],
 password: [''],
 confirmpassword: ['']
 });
  }
  onSubmit(): void{
    console.log(this.registerForm.value);
  }
}

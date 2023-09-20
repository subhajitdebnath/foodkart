import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { UserdataService } from 'src/app/core/services/userdata.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent {
 
  cartItems : any[] = [];
  addressForm!:FormGroup;
  addressFormSubmit = false;
  usermodelObj : User;
  constructor(
    private cartService:CartService,
    private formBuilder: FormBuilder,
    private router: Router,
    private userdataService :UserdataService
    ){}

    ngOnInit():void{
      this.addressForm = this.formBuilder.group({
        id: [],
        fullName: ["", Validators.compose([Validators.required, Validators.minLength(5)])],        
        email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        addressLine1: ['', Validators.required],
        addressLine2: ['', Validators.required],
        city: ['', Validators.required],
        pincode: ['', Validators.required],
        country: ['', Validators.required]
    });
  }

    onSubmit(){
      this.addressFormSubmit = true;
      console.log(this.addressForm.value);
      this.usermodelObj.fullName =this.addressForm.value.fullName;
      this.usermodelObj.email =this.addressForm.value.email;
      this.usermodelObj.addressLine1 =this.addressForm.value.addressLine1;
      this.usermodelObj.addressLine2 =this.addressForm.value.addressLine2;
      this.usermodelObj.city =this.addressForm.value.city;
      this.usermodelObj.pincode =this.addressForm.value.pincode;
      this.usermodelObj.country =this.addressForm.value.country;
    
      //this.router.navigate(['checkout']);
     
      // this.userdataService.postUsers(this.usermodelObj).subscribe(res => {
      //    alert("Address saved successfully");
      // },
      // err => {
      //   alert("something went wrong");
      // });        

      localStorage.setItem('userAddress', JSON.stringify(this.addressForm.value.fullName));
    }
}

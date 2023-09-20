import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { UserdataService } from 'src/app/core/services/userdata.service';
import { UserAddress } from 'src/app/models/User';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent {
 
  cartItems : any[] = [];
  addressForm!:FormGroup;
  addressFormSubmit = false;
  usermodelObj : UserAddress;
  constructor(
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
    this.addressForm.value.id = uuidv4();
    this.userdataService.addAddress(this.addressForm.value);
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import { UseraddressService } from 'src/app/core/services/useraddress.service';
import { UserAddress } from 'src/app/models/User';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent {
 
  cartAddress : any[] = [];
  currentId: null;
  addressForm!:FormGroup;
  addressFormSubmit = false;

  constructor(
    private formBuilder: FormBuilder,
    private useraddressService :UseraddressService,
    private activateRoute:ActivatedRoute,
    private lsService:LocalstorageService
      ){
      this.activateRoute.params.subscribe((res:any)=>{
        console.log(res);
        if(res.id){
          this.currentId = res.id;
        }       
      });       
    }

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
    // Read data from local storage
    let localAddress = this.lsService.getItem("userAddress");
    console.log("address", JSON.parse(localAddress))
    let addressArray = JSON.parse(localAddress);
    
      const record  = addressArray.find(item  => item.id === this.currentId);   
      console.log(record);
      this.addressForm = this.formBuilder.group({
        id: [],
        fullName: [record.fullName, Validators.compose([Validators.required, Validators.minLength(5)])],        
        email: [record.email, [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        addressLine1: [record.addressLine1, Validators.required],
        addressLine2: [record.addressLine2, Validators.required],
        city: [record.city, Validators.required],
        pincode: [record.pincode, Validators.required],
        country: [record.country, Validators.required]
    });    
  }

  onSubmit(){
    this.addressFormSubmit = true;
    console.log(this.addressForm.value);
    this.addressForm.value.id = uuidv4();
    this.useraddressService.addAddress(this.addressForm.value);
  }
}

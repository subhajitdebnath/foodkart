import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UseraddressService } from 'src/app/core/services/useraddress.service';
import { UserAddress } from 'src/app/models/User';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
userAddresses : UserAddress[] = [];

constructor(private router:Router,
  private useraddressService : UseraddressService){}

ngOnInit(){
  this.userAddresses = this.useraddressService.userAddress;
}

addUserAddress():void{
 this.router.navigate(['address']);
}
deleteUserAddress(id: any){
this.useraddressService.removeAddress(id);
}
editUserAddress(id :number){
this.router.navigate(['address', id]);
//this.useraddressService.editAddress(id);
}
}

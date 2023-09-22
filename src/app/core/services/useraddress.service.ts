import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';
import { UserAddress } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class UseraddressService {
 

  userAddress: UserAddress[] = [];
  currentId:number = 0;
  constructor(private lsService: LocalstorageService) {
    this.checkUserAddressState();
   }
 
  checkUserAddressState() {
    let userAddress = this.lsService.getItem('userAddress');
    if(userAddress){
      this.userAddress = JSON.parse(userAddress);
    }
    else{
      this.userAddress = [];
    }
  }
  addAddress(address :UserAddress): void{
   this.userAddress.push(address);
   this.lsService.setItem('userAddress', JSON.stringify(this.userAddress));
  }
  removeAddress(userId: number) {
    const index = this.userAddress.findIndex((elem) => elem.id == userId);
    this.userAddress.splice(index, 1); 
    this.lsService.setItem('userAddress', JSON.stringify(this.userAddress));
  }
  }


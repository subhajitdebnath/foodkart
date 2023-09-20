import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';
import { UserAddress } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(
    private lsService: LocalstorageService,
  ) {
    this.checkUserAddressState();
  }

  userAddress: UserAddress[] = [];

  checkUserAddressState() {
    let userAddress = this.lsService.getItem('userAddress');
    if(userAddress) {
      this.userAddress = JSON.parse(userAddress);
    } else {
      this.userAddress = [];
    }
    // this.userAddress.next(this.cart);
  }
  
  addAddress(address: UserAddress) {
    this.userAddress.push(address);
    this.lsService.setItem('userAddress', JSON.stringify(this.userAddress));
  }
}

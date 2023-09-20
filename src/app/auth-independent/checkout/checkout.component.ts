import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from 'src/app/core/services/userdata.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
users : User[] = [];

constructor(private router:Router,
  private userdataService :UserdataService){}

ngOnInit(){
    this.userdataService.listUsers().subscribe((data : any) => {
      this.users = data;
    });
  }

addUser():void{
 this.router.navigate(['address']);
}

}

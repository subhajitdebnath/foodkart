import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  
  // Our created Data can be accessed here at api/checkout
  baseURL: string = "http://localhost:3000/";
 

  //Injecting HTTP service to communicate with the data
  constructor(private http:HttpClient) { }

  //Get User Lists
  listUsers(){
  return this.http.get(this.baseURL + 'checkout');
  }
  //Create User Address
  postUsers(){

  }
}

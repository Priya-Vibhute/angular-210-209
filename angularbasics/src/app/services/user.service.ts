import { Injectable } from '@angular/core';


export interface User 
{
  id:number,
  name:string,
  email:string,
  password:string
}
@Injectable()
export class UserService {

   user :User={
      id:101,
      name:'Nisha',
      email:'nisha@itvedant.com',
      password:'Nisha@123'
   }

  constructor() { }
}

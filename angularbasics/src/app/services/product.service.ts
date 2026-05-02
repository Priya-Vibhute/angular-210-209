import { Injectable } from '@angular/core';


export interface Product 
{
   id:number,
   name:string,
   price:number
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    { id: 101, name: 'Laptop', price: 50000 },
    { id: 102, name: 'Mobile', price: 47000 },
    { id: 103, name: 'Tablet', price: 35000 },
  ];

  // filterByPrice(45000)
  filterByGreaterThanPrice(price:number)
  {
      return this.products.filter(p=>p.price>price)
  }
  constructor() {}

}

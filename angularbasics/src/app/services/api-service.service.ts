import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Product 
{
  "id": number,
  "title":string,
  "price": number,
  "description": string,
  "category":string,
  "image":string
}

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient:HttpClient) { }

  getProducts()
  {
    return this.httpClient.get<Product[]>("https://fakestoreapi.com/products")
  }

  addProduct(product:Product)
  {
    return this.httpClient.post<Product>("https://fakestoreapi.com/products",product)
  }

  updateProduct(id:number,product:Product)
  {
      return this.httpClient.put<Product>(`https://fakestoreapi.com/products/${id}`,product)
  }

  deleteProduct(id:number)
  {
    return this.httpClient.delete<Product>(`https://fakestoreapi.com/products/${id}`)
  }
}

import { Component } from '@angular/core';
import { ApiServiceService, Product } from '../../services/api-service.service';
import { CommonModule } from '@angular/common';
import { error } from 'console';

@Component({
  selector: 'app-api-handling',
  imports: [CommonModule],
  templateUrl: './api-handling.component.html',
  styleUrl: './api-handling.component.css'
})
export class ApiHandlingComponent {


  products!:Product[]

  constructor(private apiService:ApiServiceService)
  {
          
  }

  addProduct()
  {
             
  }

  updateProducts(id:number,product:Product)
  {
           this.apiService.updateProduct(id,product)
           .subscribe({
              next:(value)=>{ 
                alert("Product updated")
              },
              error:(error)=>{
                alert(error.message)
              }
           })
  }


  deleteProduct(id:number)
  {
     this.apiService.deleteProduct(id)
     .subscribe({
      next:(value)=>alert("Product deleted"),
      error:(error)=>alert(error.message)
     })

  }

  ngOnInit()
  {
     this.apiService.getProducts()
     .subscribe({
      next:(value)=>this.products=value
     })
  }

}

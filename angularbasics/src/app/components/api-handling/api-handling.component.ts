import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { Product } from '../../services/product.service';

@Component({
  selector: 'app-api-handling',
  imports: [],
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

  updateProducts()
  {

  }


  deleteProduct()
  {

  }

  ngOnInit()
  {
     this.apiService.getProducts()
     .subscribe({
      next:(value)=>console.log(value)
     })
  }

}

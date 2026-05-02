import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';


@Component({
  selector: 'app-directives',
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
     classes=['bg-warning','m-3','p-3','text-center']
     theme=false;
     styles:string[]=[]
     loggedIn=true

     students=["Nisha","Anisha","Manisha","Sujit"]
     products:Product[]=[]

     constructor(private productService: ProductService)
     {
        this.products=this.productService.products;
     }

     toggleLogin()
     {
      this.loggedIn=!this.loggedIn
     }

     changeTheme()
     {
        this.theme=!this.theme
     }

    //  addStyles('bg-warning')
     addStyles(className:string)
     {
      this.styles.push(className)
     }


     filterByGreaterThanPrice(price:number)
     {
        this.products= this.productService.filterByGreaterThanPrice(price)
     }
     cssStyles()
     {
       return {
         color:'blue',
         'background-color':'plum'
       }
     }
}

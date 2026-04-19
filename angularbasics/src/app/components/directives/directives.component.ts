import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
     products=[
         {id:101,name:'Laptop',price:45000},
         {id:102,name:'Mobile',price:35000},
         {id:103,name:'Earphones',price:1000}
     ]

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

     cssStyles()
     {
       return {
         color:'blue',
         'background-color':'plum'
       }
     }
}

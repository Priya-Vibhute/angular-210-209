import { Component } from '@angular/core';
import { BComponent } from "../b/b.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-a',
  imports: [BComponent,CommonModule],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {
     data="Message from A component"

     isVisible=true;

     changeData(data:string)
     {
       this.data=data;
     }

     changeIsVisible()
     {
        this.isVisible=!this.isVisible
     }
}

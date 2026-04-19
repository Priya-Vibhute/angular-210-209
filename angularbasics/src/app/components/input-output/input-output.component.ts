import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { ParentComponent } from "../parent/parent.component";

@Component({
  selector: 'app-input-output',
  imports: [ProductComponent, ParentComponent],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.css'
})
export class InputOutputComponent {

  productName="Tablet"

}

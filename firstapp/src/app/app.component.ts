import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from "./components/category/category.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductComponent, CategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ABC';
}

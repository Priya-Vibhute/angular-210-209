import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

  name="XYZ"
  age=19
  altText="incorrect path"
  color='red'

  hello()
  {
    alert("Hello")
  }

}

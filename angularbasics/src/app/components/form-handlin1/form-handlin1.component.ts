import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-handlin1',
  imports: [FormsModule,CommonModule],
  templateUrl: './form-handlin1.component.html',
  styleUrl: './form-handlin1.component.css'
})
export class FormHandlin1Component {

  onSubmit(form: NgForm)
  {
         console.log(form)
  }

}

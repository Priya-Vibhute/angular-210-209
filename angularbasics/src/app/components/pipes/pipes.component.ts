import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GradePipe } from '../../pipes/grade.pipe';
import { TotalPipe } from '../../pipes/total.pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule,GradePipe,TotalPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

    text="Hello"
    person={name :'XYZ' ,age: 19}
    curdate=new Date()

}

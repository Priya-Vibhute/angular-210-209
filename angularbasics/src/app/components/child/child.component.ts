import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

   @Output() eventemitter=new EventEmitter<string>();

  // senddata("Hello")
    sendData(data:string)
    {
      this.eventemitter.emit(data)
    }

}

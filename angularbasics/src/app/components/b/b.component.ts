import { Component, Input, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-b',
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {

    @Input() message="Default value"

    constructor()
    {
      console.log("Constructor",this.message);
      
    }

    ngOnInit()
    {
      console.log("ngOnInit",this.message);
      
    }

    ngOnChanges(change:SimpleChange)
    {
      console.log("ngOnChanges",change);
      
    }

    ngDoCheck()
    {
      console.log("ngDoCheck");
      
    }

    ngOnDestroy()
    {
      console.log("component destroyed");
      
    }


}

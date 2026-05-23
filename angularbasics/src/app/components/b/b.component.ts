import { Component, ElementRef, Input, SimpleChange, ViewChild} from '@angular/core';

@Component({
  selector: 'app-b',
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {

    @Input() message="Default value"
    @ViewChild('para') paragraph !:ElementRef;
    @ViewChild('input') inputBox!:ElementRef;
    @ViewChild('box')  box!:ElementRef;

    constructor()
    {
      console.log("Constructor",this.message);
  
    }

    ngOnInit()
    {
      console.log("ngOnInit",this.message,this.paragraph);
      
    }

    ngOnChanges(change:SimpleChange)
    {
      console.log("ngOnChanges",change);
      
    }

    ngDoCheck()
    {
      console.log("ngDoCheck");
      
    }

    ngAfterContentInit()
    {
      console.log("ngAfterContentInit");
    }

    ngAfterContentChecked()
    {
      console.log("ngAfterContentChecked");
    }

    ngAfterViewInit()
    {
      this.inputBox.nativeElement.focus()
      this.paragraph.nativeElement.style.backgroundColor="plum";
      console.log("ngAfterViewInit",this.paragraph);
    }

    ngOnDestroy()
    {
      console.log("component destroyed");
      
    }

    changeShape(borderRadius:string)
    {
         this.box.nativeElement.style.borderRadius=borderRadius;
    }


}

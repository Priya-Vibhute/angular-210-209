import { Component } from '@angular/core';
import { CanExit } from '../../guards/auth-deactivate.guard';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements CanExit {

  isSaved:boolean=false;

  changeIsSaved()
  {
     this.isSaved=!this.isSaved;
  }

  canExit():boolean
  {
      return this.isSaved;
  }

}

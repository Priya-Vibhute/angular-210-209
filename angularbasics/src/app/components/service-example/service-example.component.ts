import { Component, inject } from '@angular/core';
import { User, UserService } from '../../services/user.service';

@Component({
  selector: 'app-service-example',
  imports: [],
  templateUrl: './service-example.component.html',
  styleUrl: './service-example.component.css',
  providers:[UserService]
})
export class ServiceExampleComponent {

    user?:User;

    userService:UserService=inject(UserService)

    constructor()
    {
       this.user=this.userService.user;
    }
}

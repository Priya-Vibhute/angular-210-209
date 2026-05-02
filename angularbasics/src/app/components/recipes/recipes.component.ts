import { Component } from '@angular/core';
import { Recipe, RecipesService } from '../../services/recipes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipes',
  imports: [CommonModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {

   recipes:Recipe[]=[]
   constructor(private recipesService:RecipesService)
   {

   }

   ngOnInit()
   {
      this.recipesService.getRecipes()
      .subscribe({
        next:(value)=>this.recipes=value.recipes,
        error:(error)=>alert("Something went wrong")
      })

   }

}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe, RecipesService } from '../../services/recipes.service';
import { log } from 'console';

@Component({
  selector: 'app-recipe-detail',
  imports: [],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {

    recipe!:Recipe;

    constructor(private route:ActivatedRoute,private recipeService:RecipesService)
    {
      
    }

    ngOnInit()
    {
      this.route.params.subscribe({
        next:(value)=>{
            this.recipeService.getRecipes().subscribe({
              next:(recipesData)=> {
             this.recipe=recipesData.recipes.filter(r=>r.id==value['recipeId'])[0];
             console.log(this.recipe); 
              }
            })
        }
      })
    }
}

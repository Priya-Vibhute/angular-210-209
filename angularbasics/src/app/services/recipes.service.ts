import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Recipe 
{
    id:number,
    name:string,
    ingredients:string[],
    instructions:string[],
    image:string
}

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private httpClient :HttpClient) { }

  getRecipes()
  {
    return this.httpClient.get<{recipes:Recipe[]}>("https://dummyjson.com/recipes")
  }
}

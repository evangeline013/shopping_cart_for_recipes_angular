import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test', 'https://www.wellplated.com/wp-content/uploads/2018/04/Mediterranean-Pasta-recipe-600x792.jpg'),
    new Recipe('Another Recipe', 'This is a test', 'https://www.wellplated.com/wp-content/uploads/2018/04/Mediterranean-Pasta-recipe-600x792.jpg'),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}

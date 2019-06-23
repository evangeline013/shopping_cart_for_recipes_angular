import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test', 'https://www.wellplated.com/wp-content/uploads/2018/04/Mediterranean-Pasta-recipe-600x792.jpg'),
    new Recipe('Another Recipe', 'This is a test', 'https://www.wellplated.com/wp-content/uploads/2018/04/Mediterranean-Pasta-recipe-600x792.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}

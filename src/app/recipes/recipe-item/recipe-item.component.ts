import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeItem: Recipe;

  constructor(private router: Router) { }

  ngOnInit() {}

  onEditRecipe() {
    this.router.navigate([`/recipes/${this.recipeItem.id}/edit`]);

  }
}

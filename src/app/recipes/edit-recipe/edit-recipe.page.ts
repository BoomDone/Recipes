import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.page.html',
  styleUrls: ['./edit-recipe.page.scss'],
})
export class EditRecipePage implements OnInit {
  loadedRecipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
              private router: Router,) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        // redirect user here leaves page
        this.router.navigate(['/recipes'])
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    });
  }

  deleteIngredient() {
    console.log(' TODO delete ingredient')
  }

  deleteStep() {
    console.log(' TODO delete step')
  }

  addStep() {
    console.log(' TODO add step')
  }

  addIngredient() {
    console.log(' TODO add Ingredient')
  }
}

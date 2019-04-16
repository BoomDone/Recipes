import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { sortBy} from 'underscore';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipe[];
  searchControl: FormControl;
  searching: boolean = false;
  constructor(private recipesService: RecipesService) {
    this.searchControl = new FormControl();

  }

  ngOnInit() {
    console.log('ngOnInit');

    this.recipes = this.recipesService.getAllRecipes();
    this.setFilteredItems('');

    this.searchControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe(search => {
        this.searching = false;
        this.setFilteredItems(search);
      });
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  onSearchInput(): void {
    this.searching = true;
  }

  getDesserts(): Recipe[] {
    return sortBy(this.recipes.filter(recipe => recipe.type === 'Dessert'), 'title');
  }
  getDinners(): Recipe[] {
    return sortBy(this.recipes.filter(recipe => recipe.type === 'Dinner'), 'title');
  }

  getApps(): Recipe[] {
    return sortBy(this.recipes.filter(recipe => recipe.type === 'Appetizer'), 'title');
  }

  getDrinks(): Recipe[] {
    return sortBy(this.recipes.filter(recipe => recipe.type === 'Drink'), 'title');
  }

  setFilteredItems(searchTerm): void {
    this.recipes = this.recipesService.filterItems(searchTerm);
  }

  addRecipe(): void {
    console.log(' TODO add recipe');
  }

  // Testing out ionic lifecycle events
  // TODO Remove this after testing
  // ionViewDidEnter() {
  //   console.log('!! ionViewDidEnter')
  // }

  // ionViewWillLeave() {
  //   console.log('!!! ionViewWillLeave')
  // }

  // ionViewDidLeave() {
  //   console.log('!!! ionViewDidLeave')
  // }

  ngOnDestroy() {
    console.log('!!! on destroy');
  }
}

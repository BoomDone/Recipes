import { Injectable } from '@angular/core';
import { Recipe, FoodKind } from './recipe.model';
import { _ } from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Cherry Pie',
      images: ['assets/images/cherry_pie.jpg',
               'assets/images/cherry-Pie-Slice.jpg',
                'assets/images/cherry-card.jpeg'],
      ingredients: [{name: 'cherries', amount: '4 Cups'},
                    {name: 'sugar', amount: '1.5 Cups'}],
      type: 'Dessert',
      steps: ['Place Cherries in bowl', 'Preheat over to 375 degrees']
    },
    {
      id: 'r5',
      title: 'Apple Pie',
      images: ['assets/images/Apple_pie.jpg',
                'assets/images/cherry-card.jpeg'],
      ingredients: [{name: 'apples', amount: '4 Cups'},
                    {name: 'sugar', amount: '1.5 Cups'}],
      type: 'Dessert',
      steps: ['Place Apples in bowl', 'Preheat over to 375 degrees']
    },
    {
      id: 'r6',
      title: 'Blueberry Pie',
      images: ['assets/images/cherry_pie.jpg',
                'assets/images/cherry-card.jpeg'],
      ingredients: [{name: 'blueberries ', amount: '4 Cups'},
                    {name: 'sugar', amount: '1.5 Cups'}],
      type: 'Dessert',
      steps: ['Place Blueberries in bowl', 'Preheat over to 375 degrees']
    },
    {
      id: 'r6',
      title: 'Chocolate Chip Cookies',
      images: ['assets/images/cherry-card.jpeg'],
      ingredients: [{name: 'Semi sweet chocolate chips ', amount: '12 ounces'},
                    {name: 'sugar', amount: '1.5 Cups'}],
      type: 'Dessert',
      steps: ['Place chocolate chips in bowl', 'Preheat over to 375 degrees']
    },
    {
      id: 'r2',
      title: 'Manhanttan',
      images: ['assets/images/manhattan.jpeg'],
      ingredients: [{name: 'Sweet Vermout', amount: '1 ounce'},
                    {name: 'Rye Whiskey', amount: '2 ounces'}],
      type: 'Drink',
      steps: ['Combine vermouth, and rye whiskey',
              'Shake']
    },
    {
      id: 'r3',
      title: 'Baked Pork Chop',
      images: ['assets/images/Baked-Pork-Chops.jpg'],
      ingredients: [{name: 'Bome in Pork chop', amount: '4'},
                    {name: 'olive oil', amount: '2 tablespoons'}],
      type: 'Dinner',
      steps: ['Brine pork chop',
              'Prehead oven to 375 F']
    },
    {
      id: 'r4',
      title: 'Beer Dip',
      images: ['assets/images/beer-dip.jpg'],
      ingredients: [{name: 'Cream cheese, softened', amount: '16 ounces'},
                    {name: 'beer', amount: '1/3 cup'},
                    {name: 'Shredded cheddar cheese', amount: '2 cups'}],
      type: 'Appetizer',
      steps: ['In a large bowl, beat the cream cheest and beer',
              'Stir in cheddar cheese']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }

  filterItems(searchTerm: string) {
    return this.recipes.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
 }

 getRecipeType(type: FoodKind) {
   return  _.sortBy(this.recipes.filter(recipe => recipe.type === type), 'title')

 }
}

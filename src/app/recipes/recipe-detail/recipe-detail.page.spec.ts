import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailPage } from './recipe-detail.page';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { of} from 'rxjs';
import { Recipe } from '../recipe.model';

describe('RecipeDetailPage', () => {
  let component: RecipeDetailPage;
  let fixture: ComponentFixture<RecipeDetailPage>;
  const recipe: Recipe = {
    id: 'r1',
    title: 'Cherry Pie',
    images: ['assets/images/cherry_pie.jpg',
            'assets/images/cherry-Pie-Slice.jpg',
            'assets/images/cherry-card.jpeg'],
    ingredients: [{name: 'cherries', amount: '4 Cups'},
                {name: 'sugar', amount: '1.5 Cups'}],
    type: 'Dessert',
    steps: ['Place Cherries in bowl', 'Preheat over to 375 degrees']
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        {
            provide: ActivatedRoute,
            useValue: {
                paramMap: of({id: 123})
            }
        },
        {
            provide: Router,
            useValue: {
                useVale: {navigate: jest.fn()}
            }
        },
        {
            provide: AlertController,
            useValue: {
                useVale: {create: jest.fn()}
            }
        }
    ],

      declarations: [ RecipeDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailPage);
    component = fixture.componentInstance;
    component.loadedRecipe = recipe;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

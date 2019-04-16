import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecipePage } from './edit-recipe.page';
import { ActivatedRoute, Router } from '@angular/router';
import { of} from 'rxjs';
import { Recipe } from '../recipe.model';
import { continueStatement } from '@babel/types';

describe('EditRecipePage', () => {
  let component: EditRecipePage;
  let fixture: ComponentFixture<EditRecipePage>;
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
      imports: [
      ],
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
      }
      ],
      declarations: [ EditRecipePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecipePage);
    component = fixture.componentInstance;
    component.loadedRecipe = recipe;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

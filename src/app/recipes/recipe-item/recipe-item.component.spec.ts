import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeItemComponent } from './recipe-item.component';

@Component({
  selector: 'test-component-wrapper',
  template: '<app-recipe-item [recipeItem]="recipe"></app-recipe-item>'
})
class TestComponentWrapper {
  recipe = {
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
}

describe('RecipeItemPage', () => {
  let component: RecipeItemComponent;
  let fixture: ComponentFixture<TestComponentWrapper>;
    
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponentWrapper, RecipeItemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponentWrapper);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create',  async(() => {
    expect(component).toBeTruthy();
  }));
});

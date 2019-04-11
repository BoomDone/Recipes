import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeItemPage } from './recipe-item.page';

describe('RecipeItemPage', () => {
  let component: RecipeItemPage;
  let fixture: ComponentFixture<RecipeItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

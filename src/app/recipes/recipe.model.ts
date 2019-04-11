export interface Recipe {
    id: string;
    title: string;
    images: string[];
    steps: string[];
    ingredients: Ingredient[];
    type: FoodKind;
}

export interface Ingredient {
    name: string;
    amount: string;
}

export type FoodKind = 'Dinner' | 'Appetizer' | 'Dessert' | 'Drink';

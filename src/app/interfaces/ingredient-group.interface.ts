import { Ingredient } from './ingredient.interface';

export interface IngredientGroup {
	id: number,
	title: string,
	ingredients: Ingredient[]
}

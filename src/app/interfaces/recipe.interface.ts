import { IngredientGroup } from './ingredient-group.interface';
import { ExecutionGroup } from './execution-group.interface';
import { Comment } from './comment.interface';

export interface Recipe {
	id: number,
	title: string,
	slug: string,
	ingredientGroups: IngredientGroup[],
	executionGroups: ExecutionGroup[],
	date: Date,
	comments: Comment[],
	video: string
}

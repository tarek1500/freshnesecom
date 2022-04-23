import { Category } from './category.interface';
import { Review } from './review.interface';
import { Question } from './question.interface';

export interface Product {
	id: number,
	name: string,
	slug: string,
	description: string,
	rating: number,
	price: number,
	oldPrice: number,
	currency: string,
	sku: string,
	freshness: string,
	freshnessDescription: string,
	farm: string,
	buyBy: string,
	category: Category;
	delivery: string,
	stock: number,
	quantity: number,
	shipping: string,
	deliveryDays: number,
	info: string,
	reviews: Review[],
	questions: Question[],
	images: string[]
}

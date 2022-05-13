import { ProductPack } from './product-pack.interface';
import { Category } from './category.interface';
import { Quantity } from './quantity.interface';
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
	availablePacks: ProductPack[],
	category: Category,
	delivery: string,
	selectedQuantity: Quantity,
	shipping: string,
	deliveryDays: number,
	info: string,
	reviews: Review[],
	questions: Question[],
	images: string[]
}

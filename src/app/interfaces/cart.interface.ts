import { Product } from './product.interface';

export interface Cart {
	id: number,
	products: Product[],
	total: number,
	currency: string
}

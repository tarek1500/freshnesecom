import { Product } from './product.interface';

export interface Cart {
	id: number,
	products: Product[],
	subtotal: number,
	tax: number,
	shipping: number,
	currency: string
}

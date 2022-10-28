import { User } from './user.interface';
import { OrderItem } from './order-item.interface';
import { Address } from './address.interface';

export interface Order {
	id: number,
	number: string,
	user: User,
	items: OrderItem[],
	address: Address,
	total: number,
	currency: string,
	date: Date
}

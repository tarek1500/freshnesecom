import { User } from './user.interface';

export interface Quote {
	id: number,
	author: User,
	content: string
}

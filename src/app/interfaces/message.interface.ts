import { User } from './user.interface';

export interface Message {
	id: number,
	author: User
	date: Date,
	content: string
}

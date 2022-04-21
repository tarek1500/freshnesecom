import { User } from './user.interface';

export interface Comment {
	id: number,
	author: User
	date: Date,
	content: string,
	replies: Comment[]
}

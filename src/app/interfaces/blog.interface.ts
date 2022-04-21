import { User } from './user.interface';

export interface Blog {
	id: number,
	title: string,
	slug: string,
	tag: string,
	author: User,
	date: Date,
	image: string
}

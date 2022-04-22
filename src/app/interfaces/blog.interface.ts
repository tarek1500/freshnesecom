import { User } from './user.interface';
import { Category } from './category.interface';
import { Tag } from './tag.interface';
import { Comment } from './comment.interface';

export interface Blog {
	id: number,
	title: string,
	slug: string,
	author: User,
	category: Category,
	tags: Tag[],
	content: string,
	date: Date,
	comments: Comment[]
	image: string
}

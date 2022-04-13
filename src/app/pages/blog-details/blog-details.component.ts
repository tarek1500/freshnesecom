import { Component, OnInit } from '@angular/core';

import { Breadcrumb } from '../../interfaces/breadcrumb.interface';
import { Comment } from '../../interfaces/comment.interface';

@Component({
	selector: 'app-blog-details',
	templateUrl: './blog-details.component.html',
	styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
	breadcrumb: Breadcrumb[] = [
		{ text: 'Homepage', link: '/' },
		{ text: 'Blogs', link: '/blogs' },
		{ text: 'Blog title', link: '' },
	]

	comment: Comment = {
		author: 'Author',
		tag: 'Admin',
		tagClass: 'green',
		comment: 'Hi everyone, we have been working hard with the team bringing a new articles. It has passed a few months till we released it in case of traveling and shooting, hopefully you’ll love it.'
	}

	reply: Comment = {
		author: 'User',
		tag: 'Customer',
		tagClass: 'gray',
		comment: 'Don’t worry about that, we are happy to read a new stories. The time we had to wait was crazy, but the results are awesome! You did an epic job. Now I just need to a buy one.'
	}

	constructor() { }

	ngOnInit(): void {
	}

}

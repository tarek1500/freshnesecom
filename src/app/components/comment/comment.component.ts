import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

import { Comment } from '../../interfaces/comment.interface';

@Component({
	selector: 'app-comment',
	templateUrl: './comment.component.html',
	styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
	@Input() comment!: Comment;

	moment: any = moment;

	constructor() {
	}

	ngOnInit(): void {
	}

}

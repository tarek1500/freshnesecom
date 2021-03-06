import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

import { Review } from 'src/app/interfaces/review.interface';

@Component({
	selector: 'app-review',
	templateUrl: './review.component.html',
	styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
	@Input() review!: Review;

	moment: any = moment;

	constructor() {
	}

	ngOnInit(): void {
	}

}

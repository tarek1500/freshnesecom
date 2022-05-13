import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from '../../interfaces/recipe.interface';

@Component({
	selector: 'app-banner',
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
	@Input() recipe!: Recipe;

	constructor() { }

	ngOnInit(): void {
	}

}

import { Component, Input, OnInit } from '@angular/core';

import { Breadcrumb } from '../../interfaces/breadcrumb.interface';

@Component({
	selector: 'app-breadcrumb',
	templateUrl: './breadcrumb.component.html',
	styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
	@Input('breadcrumb') breadcrumb: Breadcrumb[] = [];

	constructor() { }

	ngOnInit(): void {
	}

}

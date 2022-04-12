import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogMediumComponent } from '../../components/blog-medium/blog-medium.component';
import { BlogLargeComponent } from '../../components/blog-large/blog-large.component';

@NgModule({
	declarations: [
		BlogMediumComponent,
		BlogLargeComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		BlogMediumComponent,
		BlogLargeComponent
	]
})
export class SharedBlogsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ReplaceStringPipe } from '../../pipes/replace-string.pipe';
import { BlogMediumComponent } from '../../components/blog-medium/blog-medium.component';
import { BlogLargeComponent } from '../../components/blog-large/blog-large.component';

@NgModule({
	declarations: [
		ReplaceStringPipe,
		BlogMediumComponent,
		BlogLargeComponent
	],
	imports: [
		CommonModule,
		RouterModule
	],
	exports: [
		BlogMediumComponent,
		BlogLargeComponent
	]
})
export class SharedBlogsModule { }

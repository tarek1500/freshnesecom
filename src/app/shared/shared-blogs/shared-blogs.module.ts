import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ReplaceStringModule } from '../../modules/replace-string/replace-string.module';
import { BlogMediumComponent } from '../../components/blog-medium/blog-medium.component';
import { BlogLargeComponent } from '../../components/blog-large/blog-large.component';

@NgModule({
	declarations: [
		BlogMediumComponent,
		BlogLargeComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		ReplaceStringModule
	],
	exports: [
		BlogMediumComponent,
		BlogLargeComponent
	]
})
export class SharedBlogsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogDetailsRoutingModule } from './blog-details-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { BreadcrumbModule } from '../../modules/breadcrumb/breadcrumb.module';
import { CommentModule } from '../../modules/comment/comment.module';
import { BlogModule } from '../../modules/blog/blog.module';
import { BlogDetailsComponent } from './blog-details.component';
import { RelatedBlogsComponent } from '../../components/blog-details/related-blogs/related-blogs.component';

@NgModule({
	declarations: [
		BlogDetailsComponent,
		RelatedBlogsComponent
	],
	imports: [
		CommonModule,
		BlogDetailsRoutingModule,
		SharedModule,
		BreadcrumbModule,
		CommentModule,
		BlogModule
	]
})
export class BlogDetailsModule { }

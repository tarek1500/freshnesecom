import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BlogDetailsRoutingModule } from './blog-details-routing.module';
import { ReplaceStringModule } from '../../modules/replace-string/replace-string.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { BreadcrumbModule } from '../../modules/breadcrumb/breadcrumb.module';
import { BlogModule } from '../../modules/blog/blog.module';
import { BlogDetailsComponent } from './blog-details.component';
import { CommentComponent } from '../../components/blog-details/comment/comment.component';
import { RelatedBlogsComponent } from '../../components/blog-details/related-blogs/related-blogs.component';

@NgModule({
	declarations: [
		BlogDetailsComponent,
		CommentComponent,
		RelatedBlogsComponent
	],
	imports: [
		CommonModule,
		BlogDetailsRoutingModule,
		ReplaceStringModule,
		NgbModule,
		SharedModule,
		BreadcrumbModule,
		BlogModule
	]
})
export class BlogDetailsModule { }

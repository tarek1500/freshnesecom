import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BlogDetailsRoutingModule } from './blog-details-routing.module';
import { SharedModule } from '../../shared/shared/shared.module';
import { SharedBreadcrumbModule } from '../../shared/shared-breadcrumb/shared-breadcrumb.module';
import { SharedBlogsModule } from '../../shared/shared-blogs/shared-blogs.module';
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
		NgbModule,
		SharedModule,
		SharedBreadcrumbModule,
		SharedBlogsModule
	]
})
export class BlogDetailsModule { }

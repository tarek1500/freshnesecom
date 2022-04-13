import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { SharedModule } from '../../shared/shared/shared.module';
import { SharedBreadcrumbModule } from '../../shared/shared-breadcrumb/shared-breadcrumb.module';
import { SharedBlogsModule } from '../../shared/shared-blogs/shared-blogs.module';
import { BlogsComponent } from './blogs.component';

@NgModule({
	declarations: [
		BlogsComponent
	],
	imports: [
		CommonModule,
		BlogsRoutingModule,
		SharedModule,
		SharedBreadcrumbModule,
		SharedBlogsModule
	]
})
export class BlogsModule { }

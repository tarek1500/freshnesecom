import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { BreadcrumbModule } from '../../modules/breadcrumb/breadcrumb.module';
import { BlogModule } from '../../modules/blog/blog.module';
import { BlogsComponent } from './blogs.component';

@NgModule({
	declarations: [
		BlogsComponent
	],
	imports: [
		CommonModule,
		BlogsRoutingModule,
		SharedModule,
		BreadcrumbModule,
		BlogModule
	]
})
export class BlogsModule { }

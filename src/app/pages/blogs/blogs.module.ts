import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { BlogsRoutingModule } from './blogs-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { BreadcrumbModule } from '../../modules/breadcrumb/breadcrumb.module';
import { TextInputGroupModule } from '../../modules/text-input-group/text-input-group.module';
import { BlogModule } from '../../modules/blog/blog.module';
import { BlogsComponent } from './blogs.component';

@NgModule({
	declarations: [
		BlogsComponent
	],
	imports: [
		CommonModule,
		TranslateModule,
		BlogsRoutingModule,
		SharedModule,
		BreadcrumbModule,
		TextInputGroupModule,
		BlogModule
	]
})
export class BlogsModule { }

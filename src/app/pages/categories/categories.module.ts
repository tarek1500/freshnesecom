import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { BreadcrumbModule } from '../../modules/breadcrumb/breadcrumb.module';
import { CategoriesComponent } from './categories.component';

@NgModule({
	declarations: [
		CategoriesComponent
	],
	imports: [
		CommonModule,
		CategoriesRoutingModule,
		SharedModule,
		BreadcrumbModule
	]
})
export class CategoriesModule { }

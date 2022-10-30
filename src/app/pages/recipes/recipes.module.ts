import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { BreadcrumbModule } from '../../modules/breadcrumb/breadcrumb.module';
import { BannerModule } from '../../modules/banner/banner.module';
import { RecipesComponent } from './recipes.component';

@NgModule({
	declarations: [
		RecipesComponent
	],
	imports: [
		CommonModule,
		TranslateModule,
		RecipesRoutingModule,
		SharedModule,
		BreadcrumbModule,
		BannerModule
	]
})
export class RecipesModule { }

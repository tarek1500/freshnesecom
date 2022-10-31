import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RecipeDetailsRoutingModule } from './recipe-details-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { BreadcrumbModule } from '../../modules/breadcrumb/breadcrumb.module';
import { CommentModule } from '../../modules/comment/comment.module';
import { SafeModule } from '../../modules/safe/safe.module';
import { RecipeDetailsComponent } from './recipe-details.component';

@NgModule({
	declarations: [
		RecipeDetailsComponent
	],
	imports: [
		CommonModule,
		TranslateModule,
		RecipeDetailsRoutingModule,
		NgbModule,
		SharedModule,
		BreadcrumbModule,
		CommentModule,
		SafeModule
	]
})
export class RecipeDetailsModule { }

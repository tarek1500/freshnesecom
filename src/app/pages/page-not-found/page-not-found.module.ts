import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
	declarations: [
		PageNotFoundComponent
	],
	imports: [
		CommonModule,
		TranslateModule,
		PageNotFoundRoutingModule,
		SharedModule
	]
})
export class PageNotFoundModule { }

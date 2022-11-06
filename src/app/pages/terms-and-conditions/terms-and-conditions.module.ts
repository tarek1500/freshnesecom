import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { TermsAndConditionsRoutingModule } from './terms-and-conditions-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { BreadcrumbModule } from '../../modules/breadcrumb/breadcrumb.module';
import { TermsAndConditionsComponent } from './terms-and-conditions.component';

@NgModule({
	declarations: [
		TermsAndConditionsComponent
	],
	imports: [
		CommonModule,
		TranslateModule,
		TermsAndConditionsRoutingModule,
		SharedModule,
		BreadcrumbModule
	]
})
export class TermsAndConditionsModule { }

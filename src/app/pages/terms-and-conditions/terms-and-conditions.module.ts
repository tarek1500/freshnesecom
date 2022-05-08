import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPageScrollModule } from 'ngx-page-scroll';

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
		TermsAndConditionsRoutingModule,
		SharedModule,
		BreadcrumbModule,
		NgxPageScrollModule
	]
})
export class TermsAndConditionsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { PrivacyPolicyRoutingModule } from './privacy-policy-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { BreadcrumbModule } from '../../modules/breadcrumb/breadcrumb.module';
import { PrivacyPolicyComponent } from './privacy-policy.component';

@NgModule({
	declarations: [
		PrivacyPolicyComponent
	],
	imports: [
		CommonModule,
		TranslateModule,
		PrivacyPolicyRoutingModule,
		SharedModule,
		BreadcrumbModule
	]
})
export class PrivacyPolicyModule { }

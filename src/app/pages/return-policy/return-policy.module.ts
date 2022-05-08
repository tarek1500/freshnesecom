import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReturnPolicyRoutingModule } from './return-policy-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { BreadcrumbModule } from '../../modules/breadcrumb/breadcrumb.module';
import { ReturnPolicyComponent } from './return-policy.component';

@NgModule({
	declarations: [
		ReturnPolicyComponent
	],
	imports: [
		CommonModule,
		ReturnPolicyRoutingModule,
		SharedModule,
		BreadcrumbModule
	]
})
export class ReturnPolicyModule { }

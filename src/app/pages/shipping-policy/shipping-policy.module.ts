import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShippingPolicyRoutingModule } from './shipping-policy-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { BreadcrumbModule } from '../../modules/breadcrumb/breadcrumb.module';
import { ShippingPolicyComponent } from './shipping-policy.component';

@NgModule({
	declarations: [
		ShippingPolicyComponent
	],
	imports: [
		CommonModule,
		ShippingPolicyRoutingModule,
		SharedModule,
		BreadcrumbModule
	]
})
export class ShippingPolicyModule { }

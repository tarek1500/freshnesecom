import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { SharedModule } from '../../shared/shared/shared.module';
import { SharedBreadcrumbModule } from '../../shared/shared-breadcrumb/shared-breadcrumb.module';
import { SharedProductTinyModule } from '../../shared/shared-product-tiny/shared-product-tiny.module';
import { CheckoutComponent } from './checkout.component';

@NgModule({
	declarations: [
		CheckoutComponent
	],
	imports: [
		CommonModule,
		CheckoutRoutingModule,
		NgbModule,
		SharedModule,
		SharedBreadcrumbModule,
		SharedProductTinyModule
	]
})
export class CheckoutModule { }

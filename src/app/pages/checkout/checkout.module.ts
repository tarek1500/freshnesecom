import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { BreadcrumbModule } from '../../modules/breadcrumb/breadcrumb.module';
import { ProductTinyModule } from '../../modules/product-tiny/product-tiny.module';
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
		BreadcrumbModule,
		ProductTinyModule
	]
})
export class CheckoutModule { }

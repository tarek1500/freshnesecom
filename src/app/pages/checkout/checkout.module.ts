import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { BreadcrumbModule } from '../../modules/breadcrumb/breadcrumb.module';
import { TextInputGroupModule } from '../../modules/text-input-group/text-input-group.module';
import { ProductTinyModule } from '../../modules/product-tiny/product-tiny.module';
import { CheckoutComponent } from './checkout.component';

@NgModule({
	declarations: [
		CheckoutComponent
	],
	imports: [
		CommonModule,
		TranslateModule,
		CheckoutRoutingModule,
		FormsModule,
		NgbModule,
		SharedModule,
		BreadcrumbModule,
		TextInputGroupModule,
		ProductTinyModule
	]
})
export class CheckoutModule { }

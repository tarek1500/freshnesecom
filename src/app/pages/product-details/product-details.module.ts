import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { BreadcrumbModule } from '../../modules/breadcrumb/breadcrumb.module';
import { RelatedProductsModule } from '../../modules/related-products/related-products.module';
import { ProductDetailsComponent } from './product-details.component';

@NgModule({
	declarations: [
		ProductDetailsComponent
	],
	imports: [
		CommonModule,
		ProductDetailsRoutingModule,
		NgbModule,
		SharedModule,
		BreadcrumbModule,
		RelatedProductsModule
	]
})
export class ProductDetailsModule { }

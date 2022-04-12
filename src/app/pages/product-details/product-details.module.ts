import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { SharedModule } from '../../shared/shared/shared.module';
import { RelatedProductsModule } from '../../shared/related-products/related-products.module';
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
		RelatedProductsModule
	]
})
export class ProductDetailsModule { }

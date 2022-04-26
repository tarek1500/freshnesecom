import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { BreadcrumbModule } from '../../modules/breadcrumb/breadcrumb.module';
import { RelatedProductsModule } from '../../modules/related-products/related-products.module';
import { ProductDetailsComponent } from './product-details.component';
import { ReviewComponent } from '../../components/product-details/review/review.component';

@NgModule({
	declarations: [
		ProductDetailsComponent,
		ReviewComponent
	],
	imports: [
		CommonModule,
		ProductDetailsRoutingModule,
		FormsModule,
		NgbModule,
		SharedModule,
		BreadcrumbModule,
		RelatedProductsModule
	]
})
export class ProductDetailsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { SharedModule } from '../../shared/shared/shared.module';
import { SharedBreadcrumbModule } from '../../shared/shared-breadcrumb/shared-breadcrumb.module';
import { SharedRelatedProductsModule } from '../../shared/shared-related-products/shared-related-products.module';
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
		SharedBreadcrumbModule,
		SharedRelatedProductsModule
	]
})
export class ProductDetailsModule { }

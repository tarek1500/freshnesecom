import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { BreadcrumbModule } from '../../modules/breadcrumb/breadcrumb.module';
import { StockInputGroupModule } from '../../modules/stock-input-group/stock-input-group.module';
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
		TranslateModule,
		ProductDetailsRoutingModule,
		FormsModule,
		NgbModule,
		SharedModule,
		BreadcrumbModule,
		StockInputGroupModule,
		RelatedProductsModule
	]
})
export class ProductDetailsModule { }

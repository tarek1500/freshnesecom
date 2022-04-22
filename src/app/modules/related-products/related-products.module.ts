import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductModule } from '../product/product.module';
import { RelatedProductsComponent } from '../../components/related-products/related-products.component';

@NgModule({
	declarations: [
		RelatedProductsComponent
	],
	imports: [
		CommonModule,
		ProductModule
	],
	exports: [
		RelatedProductsComponent
	]
})
export class RelatedProductsModule { }

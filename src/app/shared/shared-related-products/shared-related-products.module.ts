import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedProductsModule } from '../shared-products/shared-products.module';
import { RelatedProductsComponent } from '../../components/related-products/related-products.component';

@NgModule({
	declarations: [
		RelatedProductsComponent
	],
	imports: [
		CommonModule,
		SharedProductsModule
	],
	exports: [
		RelatedProductsComponent
	]
})
export class SharedRelatedProductsModule { }

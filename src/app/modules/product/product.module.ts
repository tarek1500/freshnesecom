import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductComponent } from '../../components/product/product.component';

@NgModule({
	declarations: [
		ProductComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		NgbModule
	],
	exports: [
		ProductComponent
	]
})
export class ProductModule { }

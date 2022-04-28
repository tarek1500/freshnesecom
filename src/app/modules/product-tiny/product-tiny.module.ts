import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductTinyComponent } from '../../components/product-tiny/product-tiny.component';
import { StockInputGroupModule } from '../stock-input-group/stock-input-group.module';

@NgModule({
	declarations: [
		ProductTinyComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		NgbModule,
		StockInputGroupModule
	],
	exports: [
		ProductTinyComponent
	]
})
export class ProductTinyModule { }

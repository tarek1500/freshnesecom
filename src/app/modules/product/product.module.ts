import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductComponent } from '../../components/product/product.component';
import { StockInputGroupModule } from '../stock-input-group/stock-input-group.module';

@NgModule({
	declarations: [
		ProductComponent
	],
	imports: [
		CommonModule,
		TranslateModule,
		RouterModule,
		NgbModule,
		StockInputGroupModule
	],
	exports: [
		ProductComponent
	]
})
export class ProductModule { }

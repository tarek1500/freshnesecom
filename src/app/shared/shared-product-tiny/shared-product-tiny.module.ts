import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductTinyComponent } from '../../components/product-tiny/product-tiny.component';

@NgModule({
	declarations: [
		ProductTinyComponent
	],
	imports: [
		CommonModule,
		NgbModule
	],
	exports: [
		ProductTinyComponent
	]
})
export class SharedProductTinyModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductTinyComponent } from '../../components/product-tiny/product-tiny.component';

@NgModule({
	declarations: [
		ProductTinyComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		NgbModule
	],
	exports: [
		ProductTinyComponent
	]
})
export class SharedProductTinyModule { }

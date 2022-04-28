import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StockInputGroupComponent } from '../../components/stock-input-group/stock-input-group.component';

@NgModule({
	declarations: [
		StockInputGroupComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		NgbModule
	],
	exports: [
		StockInputGroupComponent
	]
})
export class StockInputGroupModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider';

import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { BreadcrumbModule } from '../../modules/breadcrumb/breadcrumb.module';
import { ProductModule } from '../../modules/product/product.module';
import { ProductsComponent } from './products.component';
import { FilterInputGroupComponent } from '../../components/products/filter-input-group/filter-input-group.component';

@NgModule({
	declarations: [
		ProductsComponent,
		FilterInputGroupComponent
	],
	imports: [
		CommonModule,
		ProductsRoutingModule,
		NgbModule,
		NgxBootstrapSliderModule,
		SharedModule,
		BreadcrumbModule,
		ProductModule
	]
})
export class ProductsModule { }

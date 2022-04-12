import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider';

import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../../shared/shared/shared.module';
import { SharedBreadcrumbModule } from '../../shared/shared-breadcrumb/shared-breadcrumb.module';
import { SharedProductsModule } from '../../shared/shared-products/shared-products.module';
import { ProductsComponent } from './products.component';

@NgModule({
	declarations: [
		ProductsComponent
	],
	imports: [
		CommonModule,
		ProductsRoutingModule,
		NgbModule,
		NgxBootstrapSliderModule,
		SharedModule,
		SharedBreadcrumbModule,
		SharedProductsModule
	]
})
export class ProductsModule { }

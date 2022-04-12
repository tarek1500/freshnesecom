import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider';

import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../../shared/shared/shared.module';
import { BreadcrumbModule } from '../../shared/breadcrumb/breadcrumb.module';
import { SharedProductsModule } from '../../shared/shared-products/shared-products.module';
import { ShopComponent } from './shop.component';

@NgModule({
	declarations: [
		ShopComponent
	],
	imports: [
		CommonModule,
		ShopRoutingModule,
		NgbModule,
		NgxBootstrapSliderModule,
		SharedModule,
		BreadcrumbModule,
		SharedProductsModule
	]
})
export class ShopModule { }

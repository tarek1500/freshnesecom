import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { BreadcrumbModule } from '../../modules/breadcrumb/breadcrumb.module';
import { ProductModule } from '../../modules/product/product.module';
import { WishlistComponent } from './wishlist.component';

@NgModule({
	declarations: [
		WishlistComponent
	],
	imports: [
		CommonModule,
		WishlistRoutingModule,
		NgbModule,
		NgxBootstrapSliderModule,
		SharedModule,
		BreadcrumbModule,
		ProductModule
	]
})
export class WishlistModule { }

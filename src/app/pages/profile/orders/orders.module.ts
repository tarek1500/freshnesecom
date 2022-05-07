import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { ShowOrderComponent } from './show-order/show-order.component';

@NgModule({
	declarations: [
		OrdersComponent,
		ListOrdersComponent,
		ShowOrderComponent
	],
	imports: [
		CommonModule,
		OrdersRoutingModule,
		NgbModule
	]
})
export class OrdersModule { }

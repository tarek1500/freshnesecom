import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';

import { ListOrdersComponent } from './list-orders/list-orders.component';
import { ShowOrderComponent } from './show-order/show-order.component';

const routes: Routes = [
	{ path: '', component: OrdersComponent, children: [
		{ path: '', component: ListOrdersComponent },
		{ path: ':order', component: ShowOrderComponent }
	] }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class OrdersRoutingModule { }

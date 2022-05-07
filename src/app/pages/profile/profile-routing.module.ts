import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
	{ path: '', component: ProfileComponent, children: [
		{ path: '', loadChildren: () => import('./info/info.module').then(m => m.InfoModule) },
		{ path: 'addresses', loadChildren: () => import('./addresses/addresses.module').then(m => m.AddressesModule) },
		{ path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }
	] }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProfileRoutingModule { }

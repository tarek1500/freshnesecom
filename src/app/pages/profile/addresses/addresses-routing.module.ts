import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressesComponent } from './addresses.component';

import { ListAddressesComponent } from './list-addresses/list-addresses.component';
import { CreateAddressComponent } from './create-address/create-address.component';

const routes: Routes = [
	{ path: '', component: AddressesComponent, children: [
		{ path: '', component: ListAddressesComponent },
		{ path: 'create', component: CreateAddressComponent },
		{ path: ':address/edit', component: CreateAddressComponent }
	] }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AddressesRoutingModule { }

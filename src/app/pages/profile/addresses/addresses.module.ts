import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddressesRoutingModule } from './addresses-routing.module';
import { SafeModule } from '../../../modules/safe/safe.module';
import { AddressesComponent } from './addresses.component';
import { ListAddressesComponent } from './list-addresses/list-addresses.component';
import { CreateAddressComponent } from './create-address/create-address.component';

@NgModule({
	declarations: [
		AddressesComponent,
		ListAddressesComponent,
		CreateAddressComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		AddressesRoutingModule,
		SafeModule
	]
})
export class AddressesModule { }

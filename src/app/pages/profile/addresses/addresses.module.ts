import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AddressesRoutingModule } from './addresses-routing.module';
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
		TranslateModule,
		FormsModule,
		AddressesRoutingModule,
		AgmCoreModule.forRoot({
			apiKey: ''
		})
	]
})
export class AddressesModule { }

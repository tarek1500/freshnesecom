import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Address } from '../../../../interfaces/address.interface';

@Component({
	selector: 'app-create',
	templateUrl: './create-address.component.html',
	styleUrls: ['./create-address.component.scss']
})
export class CreateAddressComponent implements OnInit, OnDestroy {
	routeSubscription!: Subscription;
	title: string = 'Create';
	address!: Address;
	mapKey!: string;
	mapLink!: string;

	constructor(private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.mapKey = 'AIzaSyDf-f1DSmCjXWf6hVAChdOxbYmf3kbrUnE';
		this.routeSubscription = this.route.params.subscribe(params => {
			let id = params['address'];

			if (id) {
				// Fetch address from server
				this.title = 'Update';
				this.address = {
					id: id,
					title: 'Main address',
					address: '1234 Freshnesecom St, San Francisco, CA',
					postal: '12345',
					latitude: 31.259672,
					longitude: 29.996615
				};
				this.mapLink = 'https://www.google.com/maps/embed/v1/place?key=' + this.mapKey + '&q=' + this.address.latitude + ',' + this.address.longitude;
			}
			else {
				this.address = {
					id: 0,
					title: '',
					address: '',
					postal: '',
					latitude: 31.259672,
					longitude: 29.996615
				};
				this.mapLink = 'https://www.google.com/maps/embed/v1/place?key=' + this.mapKey + '&q=' + this.address.latitude + ',' + this.address.longitude;
			}
		});
	}

	ngOnDestroy(): void {
		this.routeSubscription.unsubscribe();
	}

}

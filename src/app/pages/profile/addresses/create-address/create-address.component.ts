import { MouseEvent } from '@agm/core';
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
	subscriptions: Subscription[] = [];
	title: string = 'Create';
	address!: Address;
	mapCenter!: { latitude: number, longitude: number };

	constructor(private route: ActivatedRoute) { }

	ngOnInit(): void {
		let subscription = this.route.params.subscribe(params => {
			let id = params['address'];

			if (id) {
				// Fetch address from server
				this.title = 'Update';
				this.address = {
					id: id,
					title: 'Main address',
					address: '1234 Freshnesecom St',
					city: 'San Francisco, CA',
					country: 'USA',
					postal: '12345',
					latitude: 31.259672,
					longitude: 29.996615
				};
			}
			else {
				this.address = {
					id: 0,
					title: '',
					address: '',
					city: '',
					country: '',
					postal: '',
					latitude: 31.259672,
					longitude: 29.996615
				};
			}

			this.mapCenter = {
				latitude: 31.259672,
				longitude: 29.996615
			};
		});
		this.subscriptions.push(subscription);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}

	mapClicked($event: MouseEvent) {
		this.address.latitude = $event.coords.lat;
		this.address.longitude = $event.coords.lng;
	}
}

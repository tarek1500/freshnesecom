import { MouseEvent } from '@agm/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { RtlService } from '../../../../services/rtl/rtl.service';
import { Address } from '../../../../interfaces/address.interface';
import { Country } from '../../../../interfaces/country.interface';

@Component({
	selector: 'app-create',
	templateUrl: './create-address.component.html',
	styleUrls: ['./create-address.component.scss']
})
export class CreateAddressComponent implements OnInit, OnDestroy {
	subscriptions: Subscription[] = [];
	rtl: boolean = false;
	title: string;
	address!: Address;
	countries: Country[];
	mapCenter!: { latitude: number, longitude: number };

	constructor(
		private rtlService: RtlService,
		private route: ActivatedRoute
	) {
		this.title = 'translate.pages.profile.addressesSection.create.create';
		this.countries = [
			{
				id: 0,
				name: 'Egypt',
				key: 'Egypt'
			},
			{
				id: 1,
				name: 'USA',
				key: 'USA'
			},
			{
				id: 2,
				name: 'UK',
				key: 'UK'
			}
		];
	}

	ngOnInit(): void {
		let subscription = this.rtlService.rtlSubject$.subscribe(rtl => {
			this.rtl = rtl;

			if (this.rtl) {
				if (this.address?.id) {
					this.title = 'translate.pages.profile.addressesSection.create.update';
					this.address = {
						id: this.address.id,
						title: 'العنوان الرئيسي',
						address: '1234 شارع فريشنس كوم',
						city: 'سان فرانسيسكو، كاليفورنيا',
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

				this.countries = [
					{
						id: 0,
						name: 'مصر',
						key: 'Egypt'
					},
					{
						id: 1,
						name: 'الولايات المتحدة الأمريكية',
						key: 'USA'
					},
					{
						id: 2,
						name: 'المملكة المتحدة',
						key: 'UK'
					}
				];
			}
			else {
				if (this.address?.id) {
					this.title = 'translate.pages.profile.addressesSection.create.update';
					this.address = {
						id: this.address.id,
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

				this.countries = [
					{
						id: 0,
						name: 'Egypt',
						key: 'Egypt'
					},
					{
						id: 1,
						name: 'USA',
						key: 'USA'
					},
					{
						id: 2,
						name: 'UK',
						key: 'UK'
					}
				];
			}
		});
		this.subscriptions.push(subscription);

		subscription = this.route.params.subscribe(params => {
			let id = params['address'];

			if (this.rtl) {
				if (id) {
					this.title = 'translate.pages.profile.addressesSection.create.update';
					this.address = {
						id: id,
						title: 'العنوان الرئيسي',
						address: '1234 شارع فريشنس كوم',
						city: 'سان فرانسيسكو، كاليفورنيا',
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

				this.countries = [
					{
						id: 0,
						name: 'مصر',
						key: 'Egypt'
					},
					{
						id: 1,
						name: 'الولايات المتحدة الأمريكية',
						key: 'USA'
					},
					{
						id: 2,
						name: 'المملكة المتحدة',
						key: 'UK'
					}
				];
			}
			else {
				if (id) {
					this.title = 'translate.pages.profile.addressesSection.create.update';
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

				this.countries = [
					{
						id: 0,
						name: 'Egypt',
						key: 'Egypt'
					},
					{
						id: 1,
						name: 'USA',
						key: 'USA'
					},
					{
						id: 2,
						name: 'UK',
						key: 'UK'
					}
				];
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

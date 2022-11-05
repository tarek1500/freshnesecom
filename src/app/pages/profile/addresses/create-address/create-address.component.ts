import { MouseEvent as MapMouseEvent } from '@agm/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { LanguageService } from '../../../../services/language/language.service';
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
	title: string = 'translate.pages.profile.addressesSection.create.create';
	address: Address = {
		id: 0,
		title: '',
		address: '',
		city: '',
		country: {
			id: 0,
			name: ''
		},
		postal: '',
		latitude: 0,
		longitude: 0
	};
	countries!: Country[];
	mapCenter: { latitude: number, longitude: number } = {
		latitude: 31.259672,
		longitude: 29.996615
	};

	constructor(
		private languageService: LanguageService,
		private route: ActivatedRoute
	) { }

	ngOnInit(): void {
		let subscription = this.languageService.languageSubject$.subscribe(language => {
			this.rtl = language.rtl;

			if (this.address.id !== 0) {
				this.loadAddress(this.address.id);

				this.title = 'translate.pages.profile.addressesSection.create.update';
			}

			this.loadCountries();
		});
		this.subscriptions.push(subscription);

		subscription = this.route.params.subscribe(params => {
			let id = +params['address'] || 0;

			if (id !== 0) {
				this.loadAddress(id);

				this.title = 'translate.pages.profile.addressesSection.create.update';
			}

			this.loadCountries();
		});
		this.subscriptions.push(subscription);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}

	loadAddress(id: number) {
		if (this.rtl) {
			this.address = {
				id: id,
				title: 'العنوان الرئيسي',
				address: '1234 شارع فريشنس كوم',
				city: 'سان فرانسيسكو، كاليفورنيا',
				country: {
					id: 2,
					name: 'الولايات المتحدة الأمريكية'
				},
				postal: '12345',
				latitude: 31.259672,
				longitude: 29.996615
			};
		}
		else {
			this.address = {
				id: id,
				title: 'Main address',
				address: '1234 Freshnesecom St',
				city: 'San Francisco, CA',
				country: {
					id: 2,
					name: 'USA'
				},
				postal: '12345',
				latitude: 31.259672,
				longitude: 29.996615
			};
		}

		this.mapCenter = {
			latitude: this.address.latitude,
			longitude: this.address.longitude
		}
	}

	loadCountries() {
		let countries = [
			{
				id: 1,
				name: 'Egypt'
			},
			{
				id: 2,
				name: 'USA'
			},
			{
				id: 3,
				name: 'UK'
			}
		];

		if (this.rtl) {
			countries = [
				{
					id: 1,
					name: 'مصر'
				},
				{
					id: 2,
					name: 'الولايات المتحدة الأمريكية'
				},
				{
					id: 3,
					name: 'المملكة المتحدة'
				}
			];
		}

		if (this.countries) {
			this.countries.map(country => {
				country.name = countries.find(localCountry => localCountry.id === country.id)!.name;
			});
		}
		else {
			this.countries = countries;
		}
	}

	mapClicked($event: MapMouseEvent) {
		this.address.latitude = $event.coords.lat;
		this.address.longitude = $event.coords.lng;
	}
}

import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

import { RtlService } from '../../../../services/rtl/rtl.service';
import { Address } from '../../../../interfaces/address.interface';

@Component({
	selector: 'app-list-addresses',
	templateUrl: './list-addresses.component.html',
	styleUrls: ['./list-addresses.component.scss']
})
export class ListAddressesComponent implements OnInit, OnDestroy {
	subscriptions: Subscription[] = [];
	rtl: boolean = false;
	addresses: Address[];
	modalTitle!: string;

	constructor(
		private rtlService: RtlService,
		private modalService: NgbModal
	) {
		this.addresses = [
			{
				id: 1,
				title: 'Main address',
				address: '1234 Freshnesecom St',
				city: 'San Francisco, CA',
				country: 'USA',
				postal: '12345',
				latitude: 31.259672,
				longitude: 29.996615
			},
			{
				id: 2,
				title: 'Secondary address',
				address: '1234 Freshnesecom St',
				city: 'San Francisco, CA',
				country: 'USA',
				postal: '12345',
				latitude: 31.228255,
				longitude: 29.952374
			}
		];
	}

	ngOnInit(): void {
		let subscription = this.rtlService.rtlSubject$.subscribe(rtl => {
			this.rtl = rtl;

			if (this.rtl) {
				this.addresses = [
					{
						id: 1,
						title: 'العنوان الرئيسي',
						address: '1234 شارع فريشنس كوم',
						city: 'سان فرانسيسكو، كاليفورنيا',
						country: 'الولايات المتحدة الأمريكية',
						postal: '12345',
						latitude: 31.259672,
						longitude: 29.996615
					},
					{
						id: 2,
						title: 'العنوان الثانوي',
						address: '1234 شارع فريشنس كوم',
						city: 'سان فرانسيسكو، كاليفورنيا',
						country: 'الولايات المتحدة الأمريكية',
						postal: '12345',
						latitude: 31.228255,
						longitude: 29.952374
					}
				];
			}
			else {
				this.addresses = [
					{
						id: 1,
						title: 'Main address',
						address: '1234 Freshnesecom St',
						city: 'San Francisco, CA',
						country: 'USA',
						postal: '12345',
						latitude: 31.259672,
						longitude: 29.996615
					},
					{
						id: 2,
						title: 'Secondary address',
						address: '1234 Freshnesecom St',
						city: 'San Francisco, CA',
						country: 'USA',
						postal: '12345',
						latitude: 31.228255,
						longitude: 29.952374
					}
				];
			}
		});
		this.subscriptions.push(subscription);
	}

	openDeleteModal(content: TemplateRef<any>, address: Address) {
		this.modalTitle = address.title;

		this.modalService.open(content, { centered: true, size: 'lg', windowClass: this.rtl ? 'rtl' : '' });
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}
}

import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Address } from '../../../../interfaces/address.interface';

@Component({
	selector: 'app-list-addresses',
	templateUrl: './list-addresses.component.html',
	styleUrls: ['./list-addresses.component.scss']
})
export class ListAddressesComponent implements OnInit {
	addresses!: Address[];
	modalTitle!: string;
	mapKey!: string;
	mapLink!: string;

	constructor(private modalService: NgbModal) { }

	ngOnInit(): void {
		this.addresses = [
			{
				id: 1,
				title: 'Main address',
				address: '1234 Freshnesecom St, San Francisco, CA',
				postal: '12345',
				latitude: 31.259672,
				longitude: 29.996615
			},
			{
				id: 2,
				title: 'Secondary address',
				address: '1234 Freshnesecom St, San Francisco, CA',
				postal: '12345',
				latitude: 31.228255,
				longitude: 29.952374
			}
		];
		this.mapKey = 'AIzaSyDf-f1DSmCjXWf6hVAChdOxbYmf3kbrUnE';
	}

	openViewMapModel(content: TemplateRef<any>, address: Address) {
		this.modalTitle = address.title;
		this.mapLink = 'https://www.google.com/maps/embed/v1/place?key=' + this.mapKey + '&q=' + address.latitude + ',' + address.longitude;

		this.modalService.open(content, { size: 'lg', centered: true });
	}

	openDeleteModal(content: TemplateRef<any>, address: Address) {
		this.modalTitle = address.title;

		this.modalService.open(content, { size: 'lg', centered: true });
	}

}

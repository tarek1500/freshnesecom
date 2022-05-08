import { Component, OnInit } from '@angular/core';

import { Breadcrumb } from '../../interfaces/breadcrumb.interface';
import { ReturnPolicy } from '../../interfaces/return-policy.interface';

@Component({
	selector: 'app-return-policy',
	templateUrl: './return-policy.component.html',
	styleUrls: ['./return-policy.component.scss']
})
export class ReturnPolicyComponent implements OnInit {
	breadcrumb: Breadcrumb[] = [
		{ text: 'Homepage', link: '/' },
		{ text: 'Return Policy', link: '' }
	];
	returnPolicy!: ReturnPolicy;

	constructor() { }

	ngOnInit(): void {
		this.returnPolicy = {
			date: new Date('2022-5-8'),
			tableOfContents: [
				{
					name: '',
					content: '<p>Thank you for your purchase. We hope you are happy with your purchase. However, if you are not completely satisfied with your purchase for any reason, you may return it to us for a full refund, store credit, or an exchange. Please see below for more information on our return policy.</p>'
				},
				{
					name: 'Returns',
					content: '<p>All returns must be postmarked within three (3) days of the purchase date. All returned items must be in new and unused condition, with all original tags and labels attached.</p>'
				},
				{
					name: 'Return process',
					content: '<p>To return an item, please email customer service at info@freshnesecom.com to obtain a Return Merchandise Authorization (RMA) number. After receiving a RMA number, place the item securely in its original packaging, and mail your return to the following address:</p><div class="address"><div>Freshnesecom</div><div>Attn: Returns</div><div>RMA #</div><div>1234 Freshnesecom St</div><div>San Francisco</div><div>12345</div><div>Egypt</div></div><p>Return shipping charges will be paid or reimbursed by us.</p>'
				},
				{
					name: 'Refunds',
					content: '<p>After receiving your return and inspecting the condition of your item, we will process your return or exchange. Please allow at least seven (7) days from the receipt of your item to process your return or exchange. Refunds may take 1-2 billing cycles to appear on your credit card statement, depending on your credit card company. We will notify you by email when your return has been processed.</p>'
				},
				{
					name: 'Exceptions',
					content: '<p>For defective or damaged products, please contact us at the contact details below to arrange a refund or exchange.</p>'
				},
				{
					name: 'Questions',
					content: '<p>If you have any questions concerning our return policy, please contact us at:</p><div><div>+420 336 775 664</div><div>info@freshnesecom.com</div></div>'
				}
			]
		};
	}

}

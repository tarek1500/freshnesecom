import { Component, OnInit } from '@angular/core';

import { Breadcrumb } from '../../interfaces/breadcrumb.interface';
import { ShippingPolicy } from '../../interfaces/shipping-policy.interface';

@Component({
	selector: 'app-shipping-policy',
	templateUrl: './shipping-policy.component.html',
	styleUrls: ['./shipping-policy.component.scss']
})
export class ShippingPolicyComponent implements OnInit {
	breadcrumb: Breadcrumb[] = [
		{ text: 'Homepage', link: '/' },
		{ text: 'Shipping Policy', link: '' }
	];
	shippingPolicy!: ShippingPolicy;

	constructor() { }

	ngOnInit(): void {
		this.shippingPolicy = {
			date: new Date('2022-5-8'),
			tableOfContents: [
				{
					name: '',
					content: '<p>This Shipping & Delivery Policy is part of our Terms and Conditions ("Terms") and should be therefore read alongside our main Terms: <a href="https://freshnesecom-template.herokuapp.com/terms-and-conditions">https://freshnesecom-template.herokuapp.com/terms-and-conditions</a>.</p><p>Please carefully review our Shipping & Delivery Policy when purchasing our products. This policy will apply to any order you place with us.</p>'
				},
				{
					name: 'What are my shipping & delivery options?',
					content: '<h4>In-Store Pickup</h4><p>In-store pickup is available for all purchases. Pickups are available Monday - Sunday from 9:00 AM - 1:00 PM.</p><p>We offer various shipping options. In some cases a third-party supplier may be managing our inventory and will be responsible for shipping your products.</p><h4>Free Shipping</h4><p>We offer free Standard shipping on orders over $300 for premium subscribers.</p><h4>Expedited Shipping Fees</h4><p>We also offer expedited shipping at the following rates:</p><div class="table-responsive"><table class="table"><thead><tr><th></th><th>Standard (7 Days)</th><th>Same Day</th></tr></thead><tbody><tr><td>500 g</td><td>$3</td><td>$9</td></tr><tr><td>600 g</td><td>$4</td><td>$12</td></tr><tr><td>700 g</td><td>$5</td><td>$15</td></tr></tbody></table></div><p>If you select an expedited shipping option, we will follow up after you have placed the order with any additional shipping information.</p><p>All times and dates given for delivery of the products are given in good faith but are estimates only.</p><p>For EU and UK consumers: This does not affect your statutory rights. Unless specifically noted, estimated delivery times reflect the earliest available delivery, and &nbsp;deliveries will be made within 30 days after the day we accept your order. For more information please refer to our Terms.</p>'
				},
				{
					name: 'Do you deliver internationally?',
					content: '<p>We offer worldwide shipping. Free Standard shipping is valid on international orders.</p><p>For information about customs process:</p><ul><li>Call toll free at +420 336 775 664</li><li>Email info@freshnesecom.com</li></ul><p>Please note, we may be subject to various rules and restrictions in relation to some international deliveries and you may be subject to additional taxes and duties over which we have no control. If such cases apply, you are responsible for complying with the laws applicable to the country where you live and will be responsible for any such additional costs or taxes.</p>'
				},
				{
					name: 'What happens if my order is delayed?',
					content: '<p>If delivery is delayed for any reason we will let you know as soon as possible and will advise you of a revised estimated date for delivery.</p><p>For EU and UK consumers: This does not affect your statutory rights. For more information please refer to our Terms.</p>'
				},
				{
					name: 'Questions about returns?',
					content: '<p>If you have questions about returns, please review our Return Policy: <a href="https://freshnesecom-template.herokuapp.com/return-policy">https://freshnesecom-template.herokuapp.com/return-policy</a></p>'
				},
				{
					name: 'How can you contact us about this policy?',
					content: '<p>If you have any further questions or comments, you may contact us by:</p><ul><li>Phone (Toll free): +420 336 775 664</li><li>Email: info@freshnesecom.com</li><li>Online contact form: <a href="https://freshnesecom-template.herokuapp.com/contact">https://freshnesecom-template.herokuapp.com/contact</a></li></ul>'
				}
			]
		};
	}

}

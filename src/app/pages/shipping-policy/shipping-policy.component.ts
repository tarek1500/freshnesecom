import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { LanguageService } from '../../services/language/language.service';
import { Breadcrumb } from '../../interfaces/breadcrumb.interface';
import { ShippingPolicy } from '../../interfaces/shipping-policy.interface';

@Component({
	selector: 'app-shipping-policy',
	templateUrl: './shipping-policy.component.html',
	styleUrls: ['./shipping-policy.component.scss']
})
export class ShippingPolicyComponent implements OnInit, OnDestroy {
	subscriptions: Subscription[] = [];
	language: string = 'en';
	rtl: boolean = false;
	breadcrumb: Breadcrumb[] = [
		{ translate: 'translate.components.breadcrumb.home', text: 'Home', link: '/' },
		{ translate: 'translate.components.breadcrumb.shippingPolicy', text: 'Shipping Policy', link: '' }
	];
	shippingPolicy!: ShippingPolicy;

	constructor(private languageService: LanguageService) { }

	ngOnInit(): void {
		let subscription = this.languageService.languageSubject$.subscribe(language => {
			this.language = language.language;
			this.rtl = language.rtl;

			this.loadShippingPolicy();
		});
		this.subscriptions.push(subscription);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}

	loadShippingPolicy() {
		if (this.rtl) {
			this.shippingPolicy = {
				date: new Date('2022-5-8'),
				tableOfContents: [
					{
						name: '',
						content: '<p>سياسة الشحن والتسليم هذه جزء من الأحكام و الشروط الخاصة بنا ("الشروط") وبالتالي يجب قراءتها جنبًا إلى جنب مع الشروط الرئيسية لدينا: <a href="https://freshnesecom-template.herokuapp.com/terms-and-conditions">الأحكام و الشروط</a>.</p><p>يرجى مراجعة سياسة الشحن والتوصيل بعناية عند شراء منتجاتنا. ستطبق هذه السياسة على أي طلب تقدمه معنا.</p>'
					},
					{
						name: 'ما هي خيارات الشحن والتوصيل الخاصة بي؟',
						content: '<h4>الاستلام من المتجر</h4><p>الاستلام من المتجر متاح لجميع المشتريات. الإلتقاط متاح من الاثنين إلى الأحد من 9:00 صباحًا إلى 1:00 ظهرًا.</p><p>نحن نقدم خيارات الشحن المختلفة. في بعض الحالات، قد يدير مورد خارجي مخزوننا وسيكون مسؤولاً عن شحن منتجاتك.</p><h4>الشحن مجانا</h4><p>نحن نقدم شحنًا أساسي مجانيًا للطلبات التي تزيد عن 300 جنيه للمشتركين المميزين.</p><h4>رسوم الشحن السريع</h4><p>كما نقدم خدمة الشحن السريع بالمعدلات التالية:</p><div class="table-responsive"><table class="table"><thead><tr><th></th><th>أساسي (7 أيام)</th><th>نفس اليوم</th></tr></thead><tbody><tr><td>500 جرام</td><td>3 جنيه</td><td>9 جنيه</td></tr><tr><td>600 جرام</td><td>4 جنيه</td><td>12 جنيه</td></tr><tr><td>700 جرام</td><td>5 جنيه</td><td>15 جنيه</td></tr></tbody></table></div><p>إذا حددت خيار شحن سريع، فسنقوم بالمتابعة بعد تقديمك للطلب مع أي معلومات شحن إضافية.</p><p>يتم تقديم جميع الأوقات والتواريخ المحددة لتسليم المنتجات بحسن نية ولكنها تقديرية فقط.</p><p>بالنسبة للمستهلكين في الاتحاد الأوروبي والمملكة المتحدة: هذا لا يؤثر على حقوقك القانونية. ما لم يُذكر على وجه التحديد، تعكس أوقات التسليم المقدرة أقرب وقت تسليم متاح، و سيتم التسليم في غضون 30 يومًا بعد اليوم الذي نقبل فيه طلبك. لمزيد من المعلومات، يرجى الرجوع إلى شروطنا.</p>'
					},
					{
						name: 'هل نقوم بالتوصل دوليا؟',
						content: '<p>نحن نقدم الشحن في جميع أنحاء العالم. الشحن الأساسي المجاني صالح على الطلبات الدولية.</p><p>للحصول على معلومات حول الإجراءات الجمركية:</p><ul><li>اتصل على الرقم المجاني <span class="phone">+420 336 775 664</span></li><li>البريد الإلكتروني <span class="email">info@freshnesecom.com</span></li></ul><p>يرجى ملاحظة أننا قد نكون خاضعين لقواعد وقيود مختلفة فيما يتعلق ببعض عمليات التسليم الدولية وقد تخضع لضرائب ورسوم إضافية لا نتحكم فيها. إذا تم تطبيق مثل هذه الحالات، فأنت مسؤول عن الامتثال للقوانين السارية في البلد الذي تعيش فيه وستكون مسؤولاً عن أي تكاليف أو ضرائب إضافية.</p>'
					},
					{
						name: 'ماذا يحدث إذا تأخر طلبي؟',
						content: '<p>إذا تأخر التسليم لأي سبب من الأسباب، فسنعلمك في أقرب وقت ممكن وسنعلمك بالموعد التقديري للتسليم.</p><p>بالنسبة للمستهلكين في الاتحاد الأوروبي والمملكة المتحدة: هذا لا يؤثر على حقوقك القانونية. لمزيد من المعلومات، يرجى الرجوع إلى شروطنا.</p>'
					},
					{
						name: 'أسئلة حول المرتجعات؟',
						content: '<p>إذا كانت لديك أسئلة حول المرتجعات، فيرجى مراجعة سياسة الإرجاع الخاصة بنا: <a href="https://freshnesecom-template.herokuapp.com/return-policy">سياسة الإرجاع</a></p>'
					},
					{
						name: 'كيف يمكنك الاتصال بنا بخصوص هذه السياسة؟',
						content: '<p>إذا كان لديك أي أسئلة أو تعليقات أخرى، يمكنك الاتصال بنا عن طريق:</p><ul><li>الهاتف (مجاني): <span class="phone">+420 336 775 664</span></li><li>البريد الإلكتروني: <span class="email">info@freshnesecom.com</span></li><li>نموذج الاتصال عبر الإنترنت: <a href="https://freshnesecom-template.herokuapp.com/contact">اتصل بنا</a></li></ul>'
					}
				]
			};
		}
		else {
			this.shippingPolicy = {
				date: new Date('2022-5-8'),
				tableOfContents: [
					{
						name: '',
						content: '<p>This Shipping & Delivery Policy is part of our Terms and Conditions ("Terms") and should be therefore read alongside our main Terms: <a href="https://freshnesecom-template.herokuapp.com/terms-and-conditions">Terms and Conditions</a>.</p><p>Please carefully review our Shipping & Delivery Policy when purchasing our products. This policy will apply to any order you place with us.</p>'
					},
					{
						name: 'What are my shipping & delivery options?',
						content: '<h4>In-Store Pickup</h4><p>In-store pickup is available for all purchases. Pickups are available Monday - Sunday from 9:00 AM - 1:00 PM.</p><p>We offer various shipping options. In some cases a third-party supplier may be managing our inventory and will be responsible for shipping your products.</p><h4>Free Shipping</h4><p>We offer free Standard shipping on orders over $300 for premium subscribers.</p><h4>Expedited Shipping Fees</h4><p>We also offer expedited shipping at the following rates:</p><div class="table-responsive"><table class="table"><thead><tr><th></th><th>Standard (7 Days)</th><th>Same Day</th></tr></thead><tbody><tr><td>500 g</td><td>$3</td><td>$9</td></tr><tr><td>600 g</td><td>$4</td><td>$12</td></tr><tr><td>700 g</td><td>$5</td><td>$15</td></tr></tbody></table></div><p>If you select an expedited shipping option, we will follow up after you have placed the order with any additional shipping information.</p><p>All times and dates given for delivery of the products are given in good faith but are estimates only.</p><p>For EU and UK consumers: This does not affect your statutory rights. Unless specifically noted, estimated delivery times reflect the earliest available delivery, and deliveries will be made within 30 days after the day we accept your order. For more information please refer to our Terms.</p>'
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
						content: '<p>If you have questions about returns, please review our Return Policy: <a href="https://freshnesecom-template.herokuapp.com/return-policy">Return Policy</a></p>'
					},
					{
						name: 'How can you contact us about this policy?',
						content: '<p>If you have any further questions or comments, you may contact us by:</p><ul><li>Phone (Toll free): <span class="phone">+420 336 775 664</span></li><li>Email: <span class="email">info@freshnesecom.com</span></li><li>Online contact form: <a href="https://freshnesecom-template.herokuapp.com/contact">contact us</a></li></ul>'
					}
				]
			};
		}
	}
}

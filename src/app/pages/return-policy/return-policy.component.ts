import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { LanguageService } from '../../services/language/language.service';
import { Breadcrumb } from '../../interfaces/breadcrumb.interface';
import { ReturnPolicy } from '../../interfaces/return-policy.interface';

@Component({
	selector: 'app-return-policy',
	templateUrl: './return-policy.component.html',
	styleUrls: ['./return-policy.component.scss']
})
export class ReturnPolicyComponent implements OnInit, OnDestroy {
	subscriptions: Subscription[] = [];
	language: string = 'en';
	rtl: boolean = false;
	breadcrumb: Breadcrumb[] = [
		{ translate: 'translate.components.breadcrumb.home', text: 'Home', link: '/' },
		{ translate: 'translate.components.breadcrumb.returnPolicy', text: 'Return Policy', link: '' }
	];
	returnPolicy!: ReturnPolicy;

	constructor(private languageService: LanguageService) { }

	ngOnInit(): void {
		let subscription = this.languageService.languageSubject$.subscribe(language => {
			this.language = language.language;
			this.rtl = language.rtl;

			this.loadReturnPolicy();
		});
		this.subscriptions.push(subscription);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}

	loadReturnPolicy() {
		if (this.rtl) {
			this.returnPolicy = {
				date: new Date('2022-5-8'),
				tableOfContents: [
					{
						name: '',
						content: '<p>شكرا لك على الشراء. نأمل أن تكون سعيدًا بعملية الشراء. ومع ذلك، إذا لم تكن راضيًا تمامًا عن مشترياتك لأي سبب من الأسباب، فيمكنك إعادتها إلينا لاسترداد الأموال بالكامل أو رصيد للمتجر أو للاستبدال. يرجى الاطلاع أدناه للحصول على مزيد من المعلومات حول سياسة الإرجاع لدينا.</p>'
					},
					{
						name: 'المرتجعات',
						content: '<p>يجب ختم جميع المرتجعات بختم بريد في غضون ثلاثة (3) أيام من تاريخ الشراء. يجب أن تكون جميع العناصر التي تم إرجاعها في حالة جديدة وغير مستخدمة، مع إرفاق جميع العلامات والملصقات الأصلية.</p>'
					},
					{
						name: 'عملية الإرجاع',
						content: '<p>لإرجاع عنصر، يرجى إرسال بريد إلكتروني إلى خدمة العملاء على info@freshnesecom.com للحصول على رقم ترخيص إعادة البضائع (RMA). بعد استلام رقم RMA، ضع العنصر بأمان في عبوته الأصلية، وأرسل إرجاعك بالبريد إلى العنوان التالي:</p><div class="address"><div>فريشنس كوم</div><div>عناية: إرجاع</div><div>رقم ترخيص إعادة البضائع #</div><div>1234 شارع فريشنس كوم</div><div>سان فرانسيسكو، كاليفورنيا</div><div>12345</div><div>الولايات المتحدة الأمريكية</div></div><p>سيتم دفع رسوم شحن الإرجاع أو سدادها من قبلنا.</p>'
					},
					{
						name: 'المبالغ المستردة',
						content: '<p>بعد استلام المرتجعات وفحص حالة العنصر الخاص بك، سنقوم بمعالجة عملية الإرجاع أو الاستبدال. يُرجى الانتظار سبعة (7) أيام على الأقل من تاريخ استلام السلعة لمعالجة عملية الإرجاع أو الاستبدال. قد تستغرق عمليات رد الأموال من دورة إلى دورتين فواتير لتظهر في كشف حساب بطاقتك الائتمانية، اعتمادًا على شركة بطاقة الائتمان الخاصة بك. سنخطرك عبر البريد الإلكتروني عندما تتم معالجة مرتجعك.</p>'
					},
					{
						name: 'الاستثناءات',
						content: '<p>بالنسبة للمنتجات المعيبة أو التالفة، يرجى الاتصال بنا على تفاصيل الاتصال أدناه لترتيب استرداد أو استبدال.</p>'
					},
					{
						name: 'الأسئلة',
						content: '<p>إذا كانت لديك أي أسئلة بخصوص سياسة الإرجاع الخاصة بنا، فيرجى الاتصال بنا على:</p><div><div class="phone">+420 336 775 664</div><div class="email">info@freshnesecom.com</div></div>'
					}
				]
			};
		}
		else {
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
						content: '<p>If you have any questions concerning our return policy, please contact us at:</p><div><div class="phone">+420 336 775 664</div><div class="email">info@freshnesecom.com</div></div>'
					}
				]
			};
		}
	}
}

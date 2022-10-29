import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

import { RtlService } from '../../services/rtl/rtl.service';
import { Breadcrumb } from '../../interfaces/breadcrumb.interface';
import { Product } from '../../interfaces/product.interface';
import { Review } from '../../interfaces/review.interface';

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
	subscriptions: Subscription[] = [];
	rtl: boolean = false;
	breadcrumb: Breadcrumb[] = [
		{ translate: 'translate.components.breadcrumb.home', text: 'Home', link: '/' },
		{ translate: 'translate.components.breadcrumb.products', text: 'Products', link: '/products' },
		{ translate: '', text: '', link: '' },
	];
	product!: Product;
	discount: number = 0;
	review: Review = {
		id: 0,
		author: '',
		date: new Date,
		rating: 0,
		content: ''
	}
	relatedProducts!: Product[];

	constructor(private rtlService: RtlService) { }

	ngOnInit(): void {
		let subscription = this.rtlService.rtlSubject$.subscribe(rtl => {
			this.rtl = rtl;

			this.loadData();
		});
		this.subscriptions.push(subscription);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}

	loadData() {
		if (this.rtl) {
			this.product = {
				id: 1,
				name: 'جزر من مزرعة توميسي',
				slug: 'carrots-from-tomissy-farm',
				description: 'الجزر من مزرعة توميسي هي واحدة من أفضل الجزر في السوق. يعطي توميسي وعائلته حبًا كاملاً للمنتجات الحيوية الخاصة به. ينمو جزر توميسي في الحقول بشكل طبيعي.',
				rating: 2.4,
				price: 36.23,
				oldPrice: 48.56,
				currency: 'جنيه',
				sku: '76645',
				freshness: 'يوم واحد',
				freshnessDescription: '',
				farm: 'حقول مزرعة البقالة',
				availablePacks: [
					{
						id: 1,
						stock: 10,
						pack: 'قِطَع'
					},
					{
						id: 2,
						stock: 20,
						pack: 'كيلوجرام'
					},
					{
						id: 3,
						stock: 1,
						pack: 'صندوق'
					},
					{
						id: 4,
						stock: 2,
						pack: 'حزمة'
					}
				],
				category: {
					id: 1,
					name: 'خضروات',
					slug: 'vegetables',
					subcategories: []
				},
				delivery: 'جمهورية التشيك',
				selectedQuantity: {
					id: 0,
					quantity: 0,
					pack: ''
				},
				shipping: 'الشحن مجانا',
				deliveryDays: 2,
				info: '<h3 class="heading">المنشأ</h3><p class="details">نعمل بجد للتأكد من أن الفواكه والخضروات التي نبيعها طازجة وذات جودة عالية. إذا لم نزرعها بأنفسنا ، فإننا نحصل عليها من موردين تم اختيارهم بعناية ، ونفضل الشراء محليًا كلما أمكن ذلك.</p><h3 class="heading">كيف تطبخ؟</h3><p class="details">من المشوي والسلطات والشوربات إلى الطواجن والكعك ، سيضفي الجزر حلاوة وملمسًا ولونًا على عدد هائل من الوصفات.</p><h3 class="heading">غني بالفيتامينات!</h3><div class="table-responsive"><table class="table"><thead><tr><th>فيتامينات</th><th>كمية</th><th>&#65285; القيم اليومية</th></tr></thead><tbody><tr><td>ما يعادل فيتامين أ.</td><td>735 ميكروجرام</td><td>104 &#65285;</td></tr><tr><td>الثيامين (ب 1)</td><td>0.066 مليجرام</td><td>6 &#65285;</td></tr><tr><td>النياسين (ب 3)</td><td>0.983 مليجرام</td><td>7 &#65285;</td></tr><tr><td>حمض الفوليك (Bg)</td><td>19 ميكروجرام</td><td>5 &#65285;</td></tr><tr><td>فيتامين ج</td><td>5.9 مليجرام</td><td>7 &#65285;</td></tr><tr><td>فيتامين هـ</td><td>0.66 مليجرام</td><td>4 &#65285;</td></tr><tr><td>فيتامين ك</td><td>13.2</td><td>13 &#65285;</td></tr></tbody></table></div>',
				reviews: [
					{
						id: 1,
						author: 'الكاتب',
						date: new Date('2020-06-22'),
						rating: 4,
						content: 'يتم عرض محتوى المراجعة هنا'
					},
					{
						id: 2,
						author: 'الكاتب',
						date: new Date('2020-06-22'),
						rating: 5,
						content: 'يتم عرض محتوى المراجعة هنا'
					},
					{
						id: 3,
						author: 'الكاتب',
						date: new Date('2020-06-22'),
						rating: 2,
						content: 'يتم عرض محتوى المراجعة هنا'
					},
					{
						id: 4,
						author: 'الكاتب',
						date: new Date('2020-06-22'),
						rating: 1,
						content: 'يتم عرض محتوى المراجعة هنا'
					}
				],
				questions: [
					{
						id: 1,
						content: 'سؤال بسيط؟',
						answer: 'يتم عرض الجواب هنا'
					},
					{
						id: 2,
						content: 'سؤال بسيط؟',
						answer: 'يتم عرض الجواب هنا'
					},
					{
						id: 3,
						content: 'سؤال بسيط؟',
						answer: 'يتم عرض الجواب هنا'
					},
					{
						id: 4,
						content: 'سؤال بسيط؟',
						answer: 'يتم عرض الجواب هنا'
					}
				],
				images: ['https://picsum.photos/id/112/1400/1000', 'https://picsum.photos/id/1080/1400/1000', 'https://picsum.photos/id/102/1400/1000']
			};
			this.relatedProducts = [
				{
					id: 1,
					name: 'عنوان المنتج',
					slug: 'product-title',
					description: 'مساحة لوصف صغير للمنتج',
					rating: 4.33,
					price: 3.26,
					oldPrice: 0,
					currency: 'جنيه',
					sku: '',
					freshness: '',
					freshnessDescription: '',
					farm: '',
					availablePacks: [],
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					delivery: '',
					selectedQuantity: {
						id: 0,
						quantity: 0,
						pack: ''
					},
					shipping: '',
					deliveryDays: 0,
					info: '',
					reviews: [],
					questions: [],
					images: ['https://picsum.photos/id/112/400/200']
				},
				{
					id: 2,
					name: 'عنوان المنتج',
					slug: 'product-title',
					description: 'مساحة لوصف صغير للمنتج',
					rating: 4.33,
					price: 1.48,
					oldPrice: 0,
					currency: 'جنيه',
					sku: '',
					freshness: '',
					freshnessDescription: '',
					farm: '',
					availablePacks: [],
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					delivery: '',
					selectedQuantity: {
						id: 0,
						quantity: 0,
						pack: ''
					},
					shipping: '',
					deliveryDays: 0,
					info: '',
					reviews: [],
					questions: [],
					images: ['https://picsum.photos/id/1080/400/200']
				},
				{
					id: 3,
					name: 'عنوان المنتج',
					slug: 'product-title',
					description: 'مساحة لوصف صغير للمنتج',
					rating: 4.33,
					price: 0.28,
					oldPrice: 48.56,
					currency: 'جنيه',
					sku: '',
					freshness: '',
					freshnessDescription: '',
					farm: '',
					availablePacks: [],
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					delivery: '',
					selectedQuantity: {
						id: 0,
						quantity: 0,
						pack: ''
					},
					shipping: '',
					deliveryDays: 0,
					info: '',
					reviews: [],
					questions: [],
					images: ['https://picsum.photos/id/102/600/200']
				},
				{
					id: 4,
					name: 'عنوان المنتج',
					slug: 'product-title',
					description: 'مساحة لوصف صغير للمنتج',
					rating: 4.33,
					price: 1.12,
					oldPrice: 0,
					currency: 'جنيه',
					sku: '',
					freshness: '',
					freshnessDescription: '',
					farm: '',
					availablePacks: [],
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					delivery: '',
					selectedQuantity: {
						id: 0,
						quantity: 0,
						pack: ''
					},
					shipping: '',
					deliveryDays: 0,
					info: '',
					reviews: [],
					questions: [],
					images: ['https://picsum.photos/id/107/400/200']
				}
			];
		}
		else {
			this.product = {
				id: 1,
				name: 'Carrots from tomissy farm',
				slug: 'carrots-from-tomissy-farm',
				description: 'Carrots from tomissy farm are one of the best on the market. Tomisso and his family are giving a full love to his bio products. Tomisso’s carrots are growing on the fields naturally.',
				rating: 2.4,
				price: 36.23,
				oldPrice: 48.56,
				currency: 'USD',
				sku: '76645',
				freshness: '1 day old',
				freshnessDescription: '',
				farm: 'Grocery Farm Fields',
				availablePacks: [
					{
						id: 1,
						stock: 10,
						pack: 'pcs'
					},
					{
						id: 2,
						stock: 20,
						pack: 'kgs'
					},
					{
						id: 3,
						stock: 1,
						pack: 'box'
					},
					{
						id: 4,
						stock: 2,
						pack: 'pack'
					}
				],
				category: {
					id: 1,
					name: 'Vegetables',
					slug: 'vegetables',
					subcategories: []
				},
				delivery: 'Czech republic',
				selectedQuantity: {
					id: 0,
					quantity: 0,
					pack: ''
				},
				shipping: 'Free shipping',
				deliveryDays: 2,
				info: '<h3 class="heading">Origins</h3><p class="details">We work hard to ensure that the fruits and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.</p><h3 class="heading">How to cook?</h3><p class="details">From roasts, salads and soups to casseroles and cakes, carrots will lend sweetness, texture and colour to an enormous number of recipes.</p><h3 class="heading">Full of vitamins!</h3><div class="table-responsive"><table class="table"><thead><tr><th>Vitamins</th><th>Quantity</th><th>&#65285; DV</th></tr></thead><tbody><tr><td>Vitamin A equiv.</td><td>735 μg</td><td>104 &#65285;</td></tr><tr><td>Thiamine (B1)</td><td>0.066 mg</td><td>6 &#65285;</td></tr><tr><td>Niacin (B3)</td><td>0.983 mg</td><td>7 &#65285;</td></tr><tr><td>Folate (Bg)</td><td>19 μg</td><td>5 &#65285;</td></tr><tr><td>Vitamin C</td><td>5.9 mg</td><td>7 &#65285;</td></tr><tr><td>Vitamin E</td><td>0.66 mg</td><td>4 &#65285;</td></tr><tr><td>Vitamin K</td><td>13.2</td><td>13 &#65285;</td></tr></tbody></table></div>',
				reviews: [
					{
						id: 1,
						author: 'Author',
						date: new Date('2020-06-22'),
						rating: 4,
						content: 'Review content goes here'
					},
					{
						id: 2,
						author: 'Author',
						date: new Date('2020-06-22'),
						rating: 5,
						content: 'Review content goes here'
					},
					{
						id: 3,
						author: 'Author',
						date: new Date('2020-06-22'),
						rating: 2,
						content: 'Review content goes here'
					},
					{
						id: 4,
						author: 'Author',
						date: new Date('2020-06-22'),
						rating: 1,
						content: 'Review content goes here'
					}
				],
				questions: [
					{
						id: 1,
						content: 'Simple question?',
						answer: 'Answer goes here'
					},
					{
						id: 2,
						content: 'Simple question?',
						answer: 'Answer goes here'
					},
					{
						id: 3,
						content: 'Simple question?',
						answer: 'Answer goes here'
					},
					{
						id: 4,
						content: 'Simple question?',
						answer: 'Answer goes here'
					}
				],
				images: ['https://picsum.photos/id/112/1400/1000', 'https://picsum.photos/id/1080/1400/1000', 'https://picsum.photos/id/102/1400/1000']
			};
			this.relatedProducts = [
				{
					id: 1,
					name: 'Product title',
					slug: 'product-title',
					description: 'Space for a small product description',
					rating: 4.33,
					price: 3.26,
					oldPrice: 0,
					currency: 'USD',
					sku: '',
					freshness: '',
					freshnessDescription: '',
					farm: '',
					availablePacks: [],
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					delivery: '',
					selectedQuantity: {
						id: 0,
						quantity: 0,
						pack: ''
					},
					shipping: '',
					deliveryDays: 0,
					info: '',
					reviews: [],
					questions: [],
					images: ['https://picsum.photos/id/112/400/200']
				},
				{
					id: 2,
					name: 'Product title',
					slug: 'product-title',
					description: 'Space for a small product description',
					rating: 4.33,
					price: 1.48,
					oldPrice: 0,
					currency: 'USD',
					sku: '',
					freshness: '',
					freshnessDescription: '',
					farm: '',
					availablePacks: [],
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					delivery: '',
					selectedQuantity: {
						id: 0,
						quantity: 0,
						pack: ''
					},
					shipping: '',
					deliveryDays: 0,
					info: '',
					reviews: [],
					questions: [],
					images: ['https://picsum.photos/id/1080/400/200']
				},
				{
					id: 3,
					name: 'Product title',
					slug: 'product-title',
					description: 'Space for a small product description',
					rating: 4.33,
					price: 0.28,
					oldPrice: 48.56,
					currency: 'USD',
					sku: '',
					freshness: '',
					freshnessDescription: '',
					farm: '',
					availablePacks: [],
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					delivery: '',
					selectedQuantity: {
						id: 0,
						quantity: 0,
						pack: ''
					},
					shipping: '',
					deliveryDays: 0,
					info: '',
					reviews: [],
					questions: [],
					images: ['https://picsum.photos/id/102/600/200']
				},
				{
					id: 4,
					name: 'Product title',
					slug: 'product-title',
					description: 'Space for a small product description',
					rating: 4.33,
					price: 1.12,
					oldPrice: 0,
					currency: 'USD',
					sku: '',
					freshness: '',
					freshnessDescription: '',
					farm: '',
					availablePacks: [],
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					delivery: '',
					selectedQuantity: {
						id: 0,
						quantity: 0,
						pack: ''
					},
					shipping: '',
					deliveryDays: 0,
					info: '',
					reviews: [],
					questions: [],
					images: ['https://picsum.photos/id/107/400/200']
				}
			];
		}

		this.breadcrumb[2].text = this.product.name;

		if (this.product.oldPrice != 0) {
			this.discount = Math.round((this.product.oldPrice - this.product.price) / this.product.oldPrice * 100);
		}
	}

	scrollToReviews(event: MouseEvent, info: HTMLDivElement, nav: NgbNav) {
		event.preventDefault();

		nav.select('reviews');

		info.scrollIntoView();
	}
}

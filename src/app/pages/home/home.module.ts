import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared/shared.module';
import { ProductModule } from '../../shared/product/product.module';
import { RelatedProductsModule } from '../../shared/related-products/related-products.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from '../../components/home/banner/banner.component';
import { QuoteComponent } from '../../components/home/quote/quote.component';
import { BlogLargeComponent } from '../../components/blog-large/blog-large.component';
import { BlogMediumComponent } from '../../components/blog-medium/blog-medium.component';
import { BlogSmallComponent } from '../../components/home/blog-small/blog-small.component';

@NgModule({
	declarations: [
		HomeComponent,
		BannerComponent,
		QuoteComponent,
		BlogLargeComponent,
		BlogMediumComponent,
		BlogSmallComponent
	],
	imports: [
		CommonModule,
		HomeRoutingModule,
		SharedModule,
		ProductModule,
		RelatedProductsModule,
		CarouselModule
	]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { HomeRoutingModule } from './home-routing.module';
import { ReplaceStringModule } from '../../modules/replace-string/replace-string.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { ProductModule } from '../../modules/product/product.module';
import { RelatedProductsModule } from '../../modules/related-products/related-products.module';
import { BlogModule } from '../../modules/blog/blog.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from '../../components/home/banner/banner.component';
import { QuoteComponent } from '../../components/home/quote/quote.component';
import { BlogSmallComponent } from '../../components/home/blog-small/blog-small.component';

@NgModule({
	declarations: [
		HomeComponent,
		BannerComponent,
		QuoteComponent,
		BlogSmallComponent
	],
	imports: [
		CommonModule,
		HomeRoutingModule,
		ReplaceStringModule,
		CarouselModule,
		SharedModule,
		ProductModule,
		RelatedProductsModule,
		BlogModule
	]
})
export class HomeModule { }

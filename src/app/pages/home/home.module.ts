import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { HomeRoutingModule } from './home-routing.module';
import { ReplaceStringModule } from '../../modules/replace-string/replace-string.module';
import { SharedModule } from '../../shared/shared/shared.module';
import { SharedProductsModule } from '../../shared/shared-products/shared-products.module';
import { SharedRelatedProductsModule } from '../../shared/shared-related-products/shared-related-products.module';
import { SharedBlogsModule } from '../../shared/shared-blogs/shared-blogs.module';
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
		SharedProductsModule,
		SharedRelatedProductsModule,
		SharedBlogsModule
	]
})
export class HomeModule { }

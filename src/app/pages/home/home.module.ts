import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from '../../components/home/banner/banner.component';
import { ProductComponent } from '../../components/product/product.component';
import { QuoteComponent } from '../../components/home/quote/quote.component';
import { BlogLargeComponent } from '../../components/blog-large/blog-large.component';
import { BlogMediumComponent } from '../../components/blog-medium/blog-medium.component';
import { BlogSmallComponent } from '../../components/home/blog-small/blog-small.component';
import { FooterComponent } from '../../components/footer/footer.component';

@NgModule({
	declarations: [
		HomeComponent,
		BannerComponent,
		ProductComponent,
		QuoteComponent,
		BlogLargeComponent,
		BlogMediumComponent,
		BlogSmallComponent,
		FooterComponent
	],
	imports: [
		CommonModule,
		HomeRoutingModule,
		SharedModule,
		CarouselModule
	]
})
export class HomeModule { }

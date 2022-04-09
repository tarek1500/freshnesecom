import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../../components/header/header.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { BannerComponent } from '../../components/home/banner/banner.component';
import { ProductComponent } from '../../components/product/product.component';
import { QuoteComponent } from '../../components/home/quote/quote.component';
import { BlogLargeComponent } from '../../components/blog-large/blog-large.component';
import { BlogMediumComponent } from '../../components/blog-medium/blog-medium.component';
import { BlogSmallComponent } from '../../components/home/blog-small/blog-small.component';

@NgModule({
	declarations: [
		HomeComponent,
		HeaderComponent,
		MenuComponent,
		BannerComponent,
		ProductComponent,
		QuoteComponent,
		BlogLargeComponent,
		BlogMediumComponent,
		BlogSmallComponent
	],
	imports: [
		CommonModule,
		HomeRoutingModule,
		NgbModule,
		CarouselModule
	]
})
export class HomeModule { }

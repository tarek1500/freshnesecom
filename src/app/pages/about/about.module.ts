import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { BreadcrumbModule } from '../../modules/breadcrumb/breadcrumb.module';
import { AboutComponent } from './about.component';

@NgModule({
	declarations: [
		AboutComponent
	],
	imports: [
		CommonModule,
		AboutRoutingModule,
		CarouselModule,
		SharedModule,
		BreadcrumbModule
	]
})
export class AboutModule { }

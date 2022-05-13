import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BannerComponent } from '../../components/banner/banner.component';

@NgModule({
	declarations: [
		BannerComponent
	],
	imports: [
		CommonModule,
		RouterModule
	],
	exports: [
		BannerComponent
	]
})
export class BannerModule { }

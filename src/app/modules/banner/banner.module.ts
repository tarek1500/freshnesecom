import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

import { BannerComponent } from '../../components/banner/banner.component';

@NgModule({
	declarations: [
		BannerComponent
	],
	imports: [
		CommonModule,
		TranslateModule,
		RouterModule
	],
	exports: [
		BannerComponent
	]
})
export class BannerModule { }

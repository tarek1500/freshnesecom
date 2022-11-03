import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AgmCoreModule } from '@agm/core';

import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { BreadcrumbModule } from '../../modules/breadcrumb/breadcrumb.module';
import { ContactComponent } from './contact.component';

@NgModule({
	declarations: [
		ContactComponent
	],
	imports: [
		CommonModule,
		TranslateModule,
		ContactRoutingModule,
		SharedModule,
		BreadcrumbModule,
		AgmCoreModule.forRoot({
			apiKey: ''
		})
	]
})
export class ContactModule { }

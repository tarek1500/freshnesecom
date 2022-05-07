import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { BreadcrumbModule } from '../../modules/breadcrumb/breadcrumb.module';
import { SafeModule } from '../../modules/safe/safe.module';
import { ContactComponent } from './contact.component';

@NgModule({
	declarations: [
		ContactComponent
	],
	imports: [
		CommonModule,
		ContactRoutingModule,
		SharedModule,
		BreadcrumbModule,
		SafeModule
	]
})
export class ContactModule { }

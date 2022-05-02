import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { BreadcrumbModule } from '../../modules/breadcrumb/breadcrumb.module';
import { ContactComponent } from './contact.component';
import { SafePipe } from '../../pipes/safe/safe.pipe';

@NgModule({
	declarations: [
		ContactComponent,
		SafePipe
	],
	imports: [
		CommonModule,
		ContactRoutingModule,
		SharedModule,
		BreadcrumbModule
	]
})
export class ContactModule { }

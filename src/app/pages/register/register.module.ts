import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { BreadcrumbModule } from '../../modules/breadcrumb/breadcrumb.module';
import { RegisterComponent } from './register.component';

@NgModule({
	declarations: [
		RegisterComponent
	],
	imports: [
		CommonModule,
		RegisterRoutingModule,
		SharedModule,
		BreadcrumbModule
	]
})
export class RegisterModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { BreadcrumbModule } from '../../modules/breadcrumb/breadcrumb.module';
import { LoginComponent } from './login.component';

@NgModule({
	declarations: [
		LoginComponent
	],
	imports: [
		CommonModule,
		TranslateModule,
		LoginRoutingModule,
		SharedModule,
		BreadcrumbModule
	]
})
export class LoginModule { }

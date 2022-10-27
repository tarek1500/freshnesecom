import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { BreadcrumbModule } from '../../modules/breadcrumb/breadcrumb.module';
import { ProfileComponent } from './profile.component';

@NgModule({
	declarations: [
		ProfileComponent
	],
	imports: [
		CommonModule,
		TranslateModule,
		ProfileRoutingModule,
		NgbModule,
		SharedModule,
		BreadcrumbModule
	]
})
export class ProfileModule { }

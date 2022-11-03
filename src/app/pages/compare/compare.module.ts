import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CompareRoutingModule } from './compare-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { BreadcrumbModule } from '../../modules/breadcrumb/breadcrumb.module';
import { CompareComponent } from './compare.component';

@NgModule({
	declarations: [
		CompareComponent
	],
	imports: [
		CommonModule,
		TranslateModule,
		CompareRoutingModule,
		NgbModule,
		SharedModule,
		BreadcrumbModule
	]
})
export class CompareModule { }

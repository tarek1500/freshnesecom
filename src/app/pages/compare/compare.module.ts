import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
		CompareRoutingModule,
		NgbModule,
		SharedModule,
		BreadcrumbModule
	]
})
export class CompareModule { }

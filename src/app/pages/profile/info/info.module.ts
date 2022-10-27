import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';

@NgModule({
	declarations: [
		InfoComponent
	],
	imports: [
		CommonModule,
		TranslateModule,
		FormsModule,
		InfoRoutingModule
	]
})
export class InfoModule { }

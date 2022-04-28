import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextInputGroupComponent } from '../../components/text-input-group/text-input-group.component';

@NgModule({
	declarations: [
		TextInputGroupComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		TextInputGroupComponent
	]
})
export class TextInputGroupModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReplaceStringPipe } from '../../pipes/replace-string.pipe';

@NgModule({
	declarations: [
		ReplaceStringPipe
	],
	imports: [
		CommonModule
	],
	exports: [
		ReplaceStringPipe
	]
})
export class ReplaceStringModule { }

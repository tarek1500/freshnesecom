import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommentComponent } from '../../components/comment/comment.component';

@NgModule({
	declarations: [
		CommentComponent
	],
	imports: [
		CommonModule,
		NgbModule
	],
	exports: [
		CommentComponent
	]
})
export class CommentModule { }

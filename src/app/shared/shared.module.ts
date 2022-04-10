import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from '../components/header/header.component';
import { MenuComponent } from '../components/menu/menu.component';

@NgModule({
	declarations: [
		HeaderComponent,
		MenuComponent
	],
	imports: [
		CommonModule,
		NgbModule
	],
	exports: [
		HeaderComponent,
		MenuComponent
	]
})
export class SharedModule { }

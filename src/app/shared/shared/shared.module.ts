import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from '../../components/header/header.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { FooterComponent } from '../../components/footer/footer.component';

@NgModule({
	declarations: [
		HeaderComponent,
		MenuComponent,
		FooterComponent
	],
	imports: [
		CommonModule,
		NgbModule
	],
	exports: [
		HeaderComponent,
		MenuComponent,
		FooterComponent
	]
})
export class SharedModule { }
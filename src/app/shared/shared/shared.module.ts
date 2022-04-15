import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedProductTinyModule } from '../shared-product-tiny/shared-product-tiny.module';
import { HeaderComponent } from '../../components/header/header.component';
import { CartComponent } from '../../components/cart/cart.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { FooterComponent } from '../../components/footer/footer.component';

@NgModule({
	declarations: [
		HeaderComponent,
		CartComponent,
		MenuComponent,
		FooterComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		SharedProductTinyModule,
		NgbModule
	],
	exports: [
		HeaderComponent,
		CartComponent,
		MenuComponent,
		FooterComponent
	]
})
export class SharedModule { }

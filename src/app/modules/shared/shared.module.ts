import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductTinyModule } from '../product-tiny/product-tiny.module';
import { HeaderComponent } from '../../components/header/header.component';
import { CategorySearchInputGroupComponent } from '../../components/category-search-input-group/category-search-input-group.component';
import { CartComponent } from '../../components/cart/cart.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { FooterComponent } from '../../components/footer/footer.component';

@NgModule({
	declarations: [
		HeaderComponent,
		CategorySearchInputGroupComponent,
		CartComponent,
		MenuComponent,
		FooterComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		ProductTinyModule,
		NgScrollbarModule,
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

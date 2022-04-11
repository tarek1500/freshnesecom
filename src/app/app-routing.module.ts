import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
	{ path: 'shop', loadChildren: () => import('./pages/shop/shop.module').then(m => m.ShopModule) },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}

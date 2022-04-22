import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
	{ path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
	{ path: 'categories/:slug', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule), data: { name: 'categories' } },
	{ path: 'tags/:slug', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule), data: { name: 'tags' } },
	{ path: 'product-details', loadChildren: () => import('./pages/product-details/product-details.module').then(m => m.ProductDetailsModule) },
	{ path: 'products/:slug', loadChildren: () => import('./pages/product-details/product-details.module').then(m => m.ProductDetailsModule) },
	{ path: 'blogs', loadChildren: () => import('./pages/blogs/blogs.module').then(m => m.BlogsModule) },
	{ path: 'blogs/:slug', loadChildren: () => import('./pages/blog-details/blog-details.module').then(m => m.BlogDetailsModule) },
	{ path: 'blog-details', loadChildren: () => import('./pages/blog-details/blog-details.module').then(m => m.BlogDetailsModule) },
	{ path: 'checkout', loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule) },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },

	{ path: 'products/categories/:slug', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule), data: { name: 'products.categories' } },
	{ path: 'products/tags/:slug', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule), data: { name: 'products.tags' } },
	{ path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },

	{ path: 'products/:slug', loadChildren: () => import('./pages/product-details/product-details.module').then(m => m.ProductDetailsModule) },

	{ path: 'blogs/categories/:slug', loadChildren: () => import('./pages/blogs/blogs.module').then(m => m.BlogsModule), data: { name: 'blogs.categories' } },
	{ path: 'blogs/tags/:slug', loadChildren: () => import('./pages/blogs/blogs.module').then(m => m.BlogsModule), data: { name: 'blogs.tags' } },
	{ path: 'blogs', loadChildren: () => import('./pages/blogs/blogs.module').then(m => m.BlogsModule) },

	{ path: 'blogs/:slug', loadChildren: () => import('./pages/blog-details/blog-details.module').then(m => m.BlogDetailsModule) },

	{ path: 'checkout', loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule) },

	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}

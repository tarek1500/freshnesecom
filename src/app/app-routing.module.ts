import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },

	{ path: 'categories', loadChildren: () => import('./pages/categories/categories.module').then(m => m.CategoriesModule) },

	{ path: 'categories/:slug/products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule), data: { name: 'categories.products' } },
	{ path: 'tags/:slug/products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule), data: { name: 'tags.products' } },
	{ path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },

	{ path: 'products/:slug', loadChildren: () => import('./pages/product-details/product-details.module').then(m => m.ProductDetailsModule) },

	{ path: 'categories/:slug/blogs', loadChildren: () => import('./pages/blogs/blogs.module').then(m => m.BlogsModule), data: { name: 'categories.blogs' } },
	{ path: 'tags/:slug/blogs', loadChildren: () => import('./pages/blogs/blogs.module').then(m => m.BlogsModule), data: { name: 'tags.blogs' } },
	{ path: 'blogs', loadChildren: () => import('./pages/blogs/blogs.module').then(m => m.BlogsModule) },

	{ path: 'blogs/:slug', loadChildren: () => import('./pages/blog-details/blog-details.module').then(m => m.BlogDetailsModule) },

	{ path: 'checkout', loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule) },

	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
	exports: [RouterModule]
})
export class AppRoutingModule {}

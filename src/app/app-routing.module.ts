import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },

	{ path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
	{ path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
	{ path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) },

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

	{ path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
	{ path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) },

	{ path: 'terms-and-conditions', loadChildren: () => import('./pages/terms-and-conditions/terms-and-conditions.module').then(m => m.TermsAndConditionsModule) },
	{ path: 'return-policy', loadChildren: () => import('./pages/return-policy/return-policy.module').then(m => m.ReturnPolicyModule) },

	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
	exports: [RouterModule]
})
export class AppRoutingModule {}

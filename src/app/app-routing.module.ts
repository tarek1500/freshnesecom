import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

	{ path: 'recipes', loadChildren: () => import('./pages/recipes/recipes.module').then(m => m.RecipesModule) },

	{ path: 'recipes/:slug', loadChildren: () => import('./pages/recipe-details/recipe-details.module').then(m => m.RecipeDetailsModule) },

	{ path: 'checkout', loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule) },
	{ path: 'wishlist', loadChildren: () => import('./pages/wishlist/wishlist.module').then(m => m.WishlistModule) },
	{ path: 'compare', loadChildren: () => import('./pages/compare/compare.module').then(m => m.CompareModule) },

	{ path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
	{ path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) },

	{ path: 'privacy-policy', loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule) },
	{ path: 'terms-and-conditions', loadChildren: () => import('./pages/terms-and-conditions/terms-and-conditions.module').then(m => m.TermsAndConditionsModule) },
	{ path: 'return-policy', loadChildren: () => import('./pages/return-policy/return-policy.module').then(m => m.ReturnPolicyModule) },
	{ path: 'shipping-policy', loadChildren: () => import('./pages/shipping-policy/shipping-policy.module').then(m => m.ShippingPolicyModule) },

	{ path: '**', loadChildren: () => import('./pages/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
	exports: [RouterModule]
})
export class AppRoutingModule {}

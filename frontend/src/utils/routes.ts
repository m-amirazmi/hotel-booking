import { Home } from '../pages/home';
import { Login } from '../pages/auth/login';
import { Register } from '../pages/auth/register';
import { CustomerDashboard } from '../pages/customer/dashboard';
import { VendorDashboard } from '../pages/vendor/dashboard';
import { AdminDashboard } from '../pages/admin/dashboard';
import { PublicLayout } from '../components/layouts/public-layout';
import { CustomerLayout } from '../components/layouts/customer-layout';
import { AuthLayout } from '../components/layouts/auth-layout';
import { VendorLayout } from '../components/layouts/vendor-layout';
import { AdminLayout } from '../components/layouts/admin-layout';
import { IRouting } from './interfaces';

export const routes: IRouting[] = [
	// PUBLIC
	{
		path: '/',
		component: Home,
		isProtected: false,
		layout: 'public',
	},
	{
		path: '/auth/login',
		component: Login,
		isProtected: false,
		layout: 'auth',
	},
	{
		path: '/auth/register',
		component: Register,
		isProtected: false,
		layout: 'auth',
	},

	// Customer
	{
		path: '/customer',
		component: CustomerDashboard,
		isProtected: true,
		role: 'Customer',
		layout: 'customer',
	},

	// Vendor
	{
		path: '/vendor',
		component: VendorDashboard,
		isProtected: true,
		role: 'Vendor',
		layout: 'vendor',
	},

	// Admin
	{
		path: '/admin',
		component: AdminDashboard,
		isProtected: true,
		role: 'Admin',
		layout: 'admin',
	},
];

export const routingLayouts: IRouting[] = [
	{
		path: '/',
		component: PublicLayout,
		isProtected: false,
		layout: 'public',
	},

	// Auth
	{
		path: 'auth',
		component: AuthLayout,
		isProtected: false,
		layout: 'auth',
	},

	// Customer
	{
		path: 'customer',
		component: CustomerLayout,
		isProtected: true,
		role: 'Customer',
		layout: 'customer',
	},

	// Vendor
	{
		path: 'vendor',
		component: VendorLayout,
		isProtected: true,
		role: 'Vendor',
		layout: 'vendor',
	},

	// Admin
	{
		path: 'admin',
		component: AdminLayout,
		isProtected: true,
		role: 'Admin',
		layout: 'admin',
	},
];

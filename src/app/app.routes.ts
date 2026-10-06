import { Routes } from '@angular/router';
import { ShopComponent } from './pages/shop/shop.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {
                path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', 'title': 'Funiro Home', component: HomeComponent },
            { path: 'app-home', 'title': 'Funiro Home', component: HomeComponent },
            { path: 'app-shop', 'title': 'Funiro Shop', component: ShopComponent },
        ]
    },
];

import { Routes } from '@angular/router';
import { OrderComponent } from './order/order';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Notfound } from './notfound/notfound';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    { path: 'order', component: OrderComponent },
    { path: '**', component: Notfound }
];

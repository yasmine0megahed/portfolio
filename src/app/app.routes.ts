import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ContactComponent } from './component/contact/contact.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'profile',
    component: ProfileComponent,
    title: 'Home page',
  },
  {
    path: 'contact-me',
    component: ContactComponent,
    title: 'Home page',
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    title: 'Home page',
  },
];

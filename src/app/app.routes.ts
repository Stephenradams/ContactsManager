import { Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'search', component: SearchComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact/:id', component: ContactComponent },
  { path: 'contact/edit/:id', component: ContactComponent },
  { path: '**', redirectTo: 'search' },
];

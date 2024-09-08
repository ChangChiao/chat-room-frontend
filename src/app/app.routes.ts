import { Route } from '@angular/router';
import { NotFoundPageComponent } from './page/not-found-page/not-found-page.component';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    loadComponent: () =>
      import('./page/auth-page/auth-page.component').then(
        (m) => m.AuthPageComponent
      ),
  },
  {
    path: '404',
    component: NotFoundPageComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

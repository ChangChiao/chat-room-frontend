import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./page/auth-page.component').then((m) => m.AuthPageComponent),
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

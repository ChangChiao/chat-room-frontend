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
    path: 'auth-failure',
    loadComponent: () =>
      import('./page/auth-failure-page/auth-failure-page.component').then(
        (m) => m.AuthFailurePageComponent
      ),
  },
  {
    path: 'chat-list',
    loadComponent: () =>
      import('./page/chat-list-page/chat-list-page.component').then(
        (m) => m.ChatListPageComponent
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

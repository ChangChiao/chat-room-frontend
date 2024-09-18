import { InjectionToken } from '@angular/core';
import { environment } from '../../../environments/environment';

export interface HttpConfig {
  basePath: string;
}

export const HTTP_CONFIG = new InjectionToken<HttpConfig>('HTTP_CONFIG');

export function provideHttpConfig() {
  return {
    provide: HTTP_CONFIG,
    useValue: {
      basePath: environment.api.basePath,
    },
  };
}

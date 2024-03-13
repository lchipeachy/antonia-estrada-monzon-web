import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'escuela-antonia-estrada-monzon',
          appId: '1:69205874130:web:f3a71973ac9337a6dce40b',
          storageBucket: 'escuela-antonia-estrada-monzon.appspot.com',
          apiKey: 'AIzaSyDZRwQfW9Kh3yTBhWtbWzyUfufYg6r4eOg',
          authDomain: 'escuela-antonia-estrada-monzon.firebaseapp.com',
          messagingSenderId: '69205874130',
        })
      )
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
  ],
};

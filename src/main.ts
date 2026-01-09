import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { routes } from './app/app.routes'; // Assure-toi que cette ligne est présente

bootstrapApplication(App, {
  providers: [
    provideRouter(routes), // Utilise les routes importées ici
    provideAnimations(),
    ...appConfig.providers,
  ],
}).catch(err => console.error(err));
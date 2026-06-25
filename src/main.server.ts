import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { AppRootComponent } from './app/app';
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(AppRootComponent, config, context);

export default bootstrap;

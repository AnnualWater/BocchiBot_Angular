import { CoreModule } from '@abp/ng.core';
import { registerLocale } from '@abp/ng.core/locale';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbpOAuthModule } from '@abp/ng.oauth';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HashLocationStrategy, LocationStrategy, NgOptimizedImage } from '@angular/common';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { AppComponentModule } from './components/app-component.module';
import { MarkdownModule } from 'ngx-markdown';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule.forRoot({
      environment,
      registerLocaleFn: registerLocale()
    }),
    AbpOAuthModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    NgOptimizedImage,
    AppLayoutModule,
    AppComponentModule,
    MarkdownModule.forRoot(),
  ],
  declarations: [AppComponent, NotfoundComponent],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


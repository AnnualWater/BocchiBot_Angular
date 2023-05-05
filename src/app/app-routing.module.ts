import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./bocchi/components/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'account',
        loadChildren: () => import('./bocchi/components/account/account.module').then(m => m.AccountModule)
      },
      {
        path: 'comic-subscription',
        loadChildren: () => import('./bocchi/components/comic-subscription/comic-subscription.module').then(m => m.ComicSubscriptionModule)
      },
      {
        path: 'openai',
        loadChildren: () => import('./bocchi/components/open-ai/open-ai.module').then(m => m.OpenAiModule)
      }
    ]
  },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', redirectTo: '/notfound' }
];
const routeConfig: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routeConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

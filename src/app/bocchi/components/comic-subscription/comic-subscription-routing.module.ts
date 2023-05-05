import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComicSubscriptionComponent } from './subscriptionlist/comic-subscription.component';
import { SearchComicComponent } from './search-comic/search-comic.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: ComicSubscriptionComponent },
    { path: 'search', component: SearchComicComponent },
    { path: '**', redirectTo: '/notfound' }
  ])],
  exports: [RouterModule]
})
export class ComicSubscriptionRoutingModule {
}

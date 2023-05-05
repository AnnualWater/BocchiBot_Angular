import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicSubscriptionRoutingModule } from './comic-subscription-routing.module';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ComicSubscriptionComponent } from './subscriptionlist/comic-subscription.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { SearchComicComponent } from './search-comic/search-comic.component';
import { InputTextModule } from 'primeng/inputtext';
import { CoreModule } from '@abp/ng.core';
import { ImageModule } from 'primeng/image';


@NgModule({
  declarations: [ComicSubscriptionComponent, SearchComicComponent],
  imports: [
    CommonModule,
    ComicSubscriptionRoutingModule,
    CardModule,
    TableModule,
    ToastModule,
    ButtonModule,
    ConfirmPopupModule,
    InputTextModule,
    CoreModule,
    ImageModule
  ],
  providers: [MessageService, ConfirmationService]
})
export class ComicSubscriptionModule {
}

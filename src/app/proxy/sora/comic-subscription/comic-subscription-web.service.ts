import type { ComicSubscriptionDto, SearchComicListItemDto } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComicSubscriptionWebService {
  apiName = 'Default';
  

  delComicSubscriptionByComicId = (comicId: string) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/comic-subscription-web/del-comic-subscription/${comicId}`,
    },
    { apiName: this.apiName });
  

  getComicSubscriptionList = () =>
    this.restService.request<any, ComicSubscriptionDto[]>({
      method: 'GET',
      url: '/api/app/comic-subscription-web/comic-subscription-list',
    },
    { apiName: this.apiName });
  

  searchComicBySearch = (search: string) =>
    this.restService.request<any, SearchComicListItemDto[]>({
      method: 'POST',
      url: '/api/app/comic-subscription-web/search-comic',
      params: { search },
    },
    { apiName: this.apiName });
  

  subscribeComicByComicId = (comicId: string) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/comic-subscription-web/subscribe-comic/${comicId}`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}

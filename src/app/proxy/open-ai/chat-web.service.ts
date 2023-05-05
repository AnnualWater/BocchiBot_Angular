import type { ChatMessageDto } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatWebService {
  apiName = 'Default';
  

  chatByMessages = (messages: ChatMessageDto[]) =>
    this.restService.request<any, string>({
      method: 'POST',
      responseType: 'text',
      url: '/api/app/chat-web/chat',
      body: messages,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}

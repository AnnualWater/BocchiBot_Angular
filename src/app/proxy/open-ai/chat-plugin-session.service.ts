import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class ChatPluginSessionService {
  apiName = 'Default';
  

  getFileByKey = (key: string) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: '/api/app/chat-plugin-session-web/file',
      params: { key },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}

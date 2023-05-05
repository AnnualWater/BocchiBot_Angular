import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { ActionResult } from '../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class BocchiLoginService {
  apiName = 'Default';
  

  noPasswordLoginByToken = (token: string) =>
    this.restService.request<any, ActionResult>({
      method: 'GET',
      url: '/api/bocchi/account/no_password',
      params: { token },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}

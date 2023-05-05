import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';
import { AbpOAuthService } from '@abp/ng.oauth';
import { ConfigStateService, PermissionService } from '@abp/ng.core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.top-bar.component.html'
})
export class AppTopBarComponent {

  items!: MenuItem[];

  @ViewChild('menuButton') menuButton!: ElementRef;

  @ViewChild('topBarMenuButton') topBarMenuButton!: ElementRef;

  @ViewChild('topBarMenu') menu!: ElementRef;

  isAdmin: boolean;
  manageRouteLink: string;

  getUserIconColor(): string {
    return this.isAuthenticated() ? 'DeepSkyBlue' : 'OrangeRed';
  }

  isAuthenticated(): boolean {
    return this.abpAuthService.isAuthenticated;
  }

  constructor(public layoutService: LayoutService,
              private abpAuthService: AbpOAuthService,
              private configService: ConfigStateService) {
    this.abpAuthService.init().then();
    configService.getOne$('currentUser').subscribe({
      next: (currentUser) => {
        this.isAdmin = currentUser.roles.includes('admin');
        this.manageRouteLink = environment.oAuthConfig.issuer + 'Identity/Users';
      }
    });
  }


  logOut() {
    this.abpAuthService.logout();
  }


}

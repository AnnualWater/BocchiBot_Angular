import { Component, OnInit } from '@angular/core';
import { AbpOAuthService } from '@abp/ng.oauth';

@Component({
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  ngOnInit(): void {
    if (!this.authService.isAuthenticated) {
      this.authService.navigateToLogin();
    }
  }

  constructor(private authService: AbpOAuthService) {
    this.authService.init().then();
  }


  LogOut() {
    this.authService.logout();
  }
}

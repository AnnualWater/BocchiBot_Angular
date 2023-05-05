import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: AccountComponent },
    { path: '**', redirectTo: '/notfound' }
  ])],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}

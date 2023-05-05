import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ButtonModule } from 'primeng/button';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
    MarkdownModule
  ]
})
export class HomeModule {
}

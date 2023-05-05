import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { MenuBuilderService } from '../menu-builder.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

  model: any[] = [];

  constructor(public layoutService: LayoutService,
              private menuBuilderService: MenuBuilderService) {
  }

  ngOnInit() {
    this.model = this.menuBuilderService.GetMenuModel();


  }
}

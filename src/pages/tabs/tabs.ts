import { SettingsPage } from './../settings/settings';
import { SearchPage } from './../search/search';
import { ListPage } from './../list/list';
import { Component } from '@angular/core';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListPage;
  tab2Root = SearchPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}

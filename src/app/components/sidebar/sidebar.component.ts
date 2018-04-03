import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Teambuilder',  icon: 'view_quilt', class: '' }, // Testing icon change
    { path: 'register', title: 'Pokemon Box',  icon: 'grid_on', class: '' },
    { path: 'table-list', title: 'Core Coverage',  icon: 'repeat_one', class: '' },
    { path: 'typography', title: 'Defensive Coverage',  icon: 'view_list', class: '' },
    { path: 'icons', title: 'Offensive Coverage',  icon: 'view_stream', class: '' },
    { path: 'maps', title: 'Offense vs Defense',  icon: 'poll', class: '' },
    { path: 'notifications', title: 'Notifications',  icon: 'notifications', class: '' }, // we don't need notifications
    { path: 'upgrade', title: 'Upgrade to PRO',  icon: 'unarchive', class: 'active-pro' },
]; // leaving these here in case we add more features

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

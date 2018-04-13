import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'teambuilder', title: 'Teambuilder',  icon: 'view_quilt', class: '' },
    { path: 'pokemonbox', title: 'Pokemon Box',  icon: 'grid_on', class: '' },
    { path: 'corecoverage', title: 'Core Coverage',  icon: 'repeat_one', class: '' },
    { path: 'defensivecoverage', title: 'Defensive Coverage',  icon: 'view_list', class: '' },
    { path: 'offensivecoverage', title: 'Offensive Coverage',  icon: 'view_stream', class: '' },
    { path: 'featured', title: 'Featured Teams',  icon: 'trending_up', class: '' }
];

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

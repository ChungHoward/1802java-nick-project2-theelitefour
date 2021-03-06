import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-offensevsdefense',
  templateUrl: './offensevsdefense.component.html',
  styleUrls: ['./offensevsdefense.component.css']
})
export class OffenseVsDefenseComponent implements OnInit {

  constructor() { }
  showNotification(from, align) {
      const type = ['', 'info', 'success', 'warning', 'danger'];

      const color = Math.floor((Math.random() * 4) + 1);

      $.notify({
          icon: 'offensevsdefense',
          message: 'Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer.'

      }, {
          type: type[color],
          timer: 4000,
          placement: {
              from: from,
              align: align
          }
      });
  }
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ViewUserService } from '../services/view-user.service';
import { Trainer } from '../trainer';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css'],
  providers: [ViewUserService]
})
export class ViewUsersComponent implements OnInit {

  users: Trainer[];

  constructor(private viewUserService: ViewUserService) { }

  ngOnInit() {
    this.viewUserService.viewUsers().subscribe(users => {
      alert(JSON.stringify(users));
      this.users = users;
    });
  }

}

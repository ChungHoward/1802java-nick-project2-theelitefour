import { Component, OnInit } from '@angular/core';
import { ViewUserService } from '../services/view-user.service';
import { Trainer } from '../trainer';
import {NgModule} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css'],
  providers: [ViewUserService]
})
export class ViewUsersComponent implements OnInit {
  users: Trainer[];
  form: FormGroup;
  control = new FormControl('', Validators.required);

  constructor(private viewUserService: ViewUserService, private fb: FormBuilder) {
    this.form = fb.group({
      'promote': this.control
    });
   }

  ngOnInit() {
    this.viewUserService.viewUsers().subscribe(users => {
      alert(JSON.stringify(users));
      this.users = users;
    });
  }

  onSubmit() {
    console.log('model-based form submitted');
    console.log(this.form.value);
  }

}

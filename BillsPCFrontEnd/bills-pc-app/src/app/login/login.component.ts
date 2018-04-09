import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  submitted: boolean;
  valid: boolean;

  @Input()
  loggedIn = false;
  @Output()
  notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private loginService: LoginService) {
    this.submitted = false;
  }

  onSubmit() {
    this.submitted = true;
    this.loginService.login(this.username, this.password).subscribe(successful => {
      this.valid = successful;
      this.notify.emit(successful);
    }, error => {
      console.error(error);
    }
    );
  }

  ngOnInit() { }

}
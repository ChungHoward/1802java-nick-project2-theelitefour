import { Component, OnInit } from '@angular/core';
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

  constructor(private loginService: LoginService) {
    this.submitted = false;
  }

  onSubmit() {
    this.submitted = true;
    this.loginService.login(this.username, this.password).subscribe(
      successful => {this.valid = successful; }, error => console.error(error)
    );
  }

  ngOnInit() { }

}
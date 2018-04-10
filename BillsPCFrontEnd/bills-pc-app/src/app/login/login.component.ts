import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Trainer } from '../trainer';

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

  constructor(private loginService: LoginService, private router: Router) {
    this.submitted = false;
  }

  onSubmit() {

    console.log("onsubmit called");

    this.submitted = true;
    this.loginService.login(this.username, this.password).subscribe(trainer => {
      alert(JSON.stringify(trainer));

      this.valid = trainer !== null; 

      console.log("session already exists - " + trainer === null);
      console.log("valid = " + trainer !== null);

      if (trainer !== null) {

        console.log("login called - trainer not null");

        this.loginService.changeTrainer(trainer);

        localStorage.setItem('trainer', JSON.stringify(trainer));
        this.router.navigate(['/teambuilder']);
      }

      console.log(this.username + " logged in!");

      console.log("login end");

    }, error => {
      console.error(error);
    }
    );
  }

  ngOnInit() { }

}
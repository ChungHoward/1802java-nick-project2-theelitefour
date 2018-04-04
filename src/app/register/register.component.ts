import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  email: string;
  password: string;
  cpassword: string;

  submitted: boolean;
  passwordMatch: boolean;

  constructor() {
    this.submitted = false;
    this.passwordMatch = false;
  }

  onSubmit() {
    this.submitted = true;

    const xhr = new XMLHttpRequest();
    // receive reply
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const reply = JSON.parse(xhr.responseText);
        alert(reply);

        document.getElementById('notification').innerHTML = reply;
      }
    }
    // send request to /register with fields, username, password, email
    xhr.open('POST', '/register', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('username=' + this.username + '&password=' + this.password + '&email=' + this.email);
  }

  matchPassword() {
    if (this.password === this.cpassword) {
      this.passwordMatch = true;
    } else {
      this.passwordMatch = false;
    }
  }

  ngOnInit() { }

}

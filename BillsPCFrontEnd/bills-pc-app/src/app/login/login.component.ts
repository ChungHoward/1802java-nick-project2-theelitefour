import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  submitted: boolean;

  constructor() {
    this.submitted = false;
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
    };
    // send request to /login with fields, username, password, email
    xhr.open('POST', 'login', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('username=' + this.username + '&password=' + this.password);

    // xhr.send('username=' + this.username + 'password=' + this.password);
  }

  ngOnInit() { }

}


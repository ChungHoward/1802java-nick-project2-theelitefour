import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Trainer } from '../trainer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
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
    this.submitted = true;
    this.loginService.login(this.username, this.password).subscribe(result => {
      const trainer = result[0];
      const sets = result[1];
      const teams = result[2];
      alert(JSON.stringify(trainer));
      this.valid = trainer !== null;

      if (trainer !== null) {
        this.loginService.changeTrainer(trainer);

        localStorage.setItem('trainer', JSON.stringify(trainer));
        localStorage.setItem('sets', JSON.stringify(sets));
        localStorage.setItem('teams', JSON.stringify(teams));
        this.router.navigate(['/teambuilder']);
      }
    }, error => {
      console.error(error);
    }
    );
  }

  ngOnInit() { }

}

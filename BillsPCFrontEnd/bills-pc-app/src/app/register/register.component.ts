import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';

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
  valid: boolean;

  constructor(private registerService: RegisterService) {
    this.submitted = false;
    this.passwordMatch = false;
  }

  onSubmit() {
    this.submitted = true;
    this.registerService.register(this.username, this.password, this.email).subscribe(
      successful => {this.valid = successful; }, error => console.error(error)
    );
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

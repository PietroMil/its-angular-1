import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { AuthService } from '../_service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  jsonIn = {
    username: '',
    password: '',
    rememberMe: false,
  }
  @ViewChild('loginForm') loginForm!: NgForm;
  showErrors = false;
  showPassword = false;

  constructor(private router: Router, private auth: AuthService) { }

  eyeCheck = {
    enable: '🐵',
    disabled: '🙈'
  }

  signIn() {
    if (this.loginForm.form.invalid) {
      this.showErrors = true;
    } else {
      this.auth.login(this.jsonIn).subscribe((response: any) => {
        if (response.success) {
          this.router.navigateByUrl("/home");
        } else {
          alert('login error, try again')
        }
      })

    }
  }




}

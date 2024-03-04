import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
    ) { }
  loginForm !: FormGroup
  hidePassword = true;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', [Validators.required]]
    })
    }
    onSubmit() {
      const username = this.loginForm.get('email')!.value;
      const password = this.loginForm.get('password')!.value;

      this.authService.login(username, password).subscribe(
        (res) => {
          this.snackBar.open('Login Success', 'OK', { duration: 5000 });
        },
        (error) => {
          this.snackBar.open('Bad credential', 'ERROR', { duration: 5000 });
        }
      )
    }
    signInWithGoogle() {
      console.log("you have signed up with google")
    }
    togglePasswordVisibility(): void {
      this.hidePassword = !this.hidePassword;
    }
}

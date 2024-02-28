import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator } from '../validators/confirm-password-validator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{  

  // fb = inject(FormBuilder);
  constructor(private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router) { }
  registerForm !: FormGroup
  hidePassword = true;
  hideConfirmPassword = true;
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.registerForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required, confirmPasswordValidator]],
      subscribe: [false] // unchecked by default
    })
    }
    register(): void {
      const password = this.registerForm.get('password')?.value;
      const confirmPassword = this.registerForm.get('confirmPassword')?.value;
      if (password !== confirmPassword) {
        this.snackBar.open('Password do not match.', 'Close', {duration: 5000, panelClass: 'error-snackbar' });
        return;
      }
      this.authService.register(this.registerForm.value).subscribe(
        (response) =>{
          this.snackBar.open('Sign Up successful!', 'Close', {duration: 5000 });
          this.router.navigateByUrl("/login");
        },
        (error)=>{
          console.error(error.message); // Log the error to the console
          this.snackBar.open('Sign Up failed. Please try again.', 'Close', { duration: 5000, panelClass: 'error-snackbar'});
        }
      )
    }
  
    signUpWithGoogle() {
      console.log("you have signed up with google")
    }
    togglePasswordVisibility(): void {
      this.hidePassword = !this.hidePassword;
    }
    toggleConfirmPasswordVisibility(): void {
      this.hideConfirmPassword = !this.hideConfirmPassword;
    }
  
}

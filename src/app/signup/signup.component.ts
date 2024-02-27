import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { confirmPasswordValidator } from '../validators/confirm-password-validator';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{  

  // fb = inject(FormBuilder);
  constructor(private fb: FormBuilder) { }
  registerForm !: FormGroup
  hidePassword = true;
  hideConfirmPassword = true;
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.registerForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required, this.passwordMatchValidator]],
      subscribe: [false] // unchecked by default
    },
    
    {
      validator: confirmPasswordValidator('password', 'confirmPassword')
    }
    );
    }
    register() {
      console.log(this.registerForm.value);
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
    passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
      const password = control.get('password');
      const confirmPassword = control.get('confirmPassword');
  
      if (password && confirmPassword && password.value !== confirmPassword.value) {
          return { 'confirmPasswordValidator': true };
      }
  
      return null;
  }
  
}

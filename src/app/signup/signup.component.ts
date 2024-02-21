import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.registerForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
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
}

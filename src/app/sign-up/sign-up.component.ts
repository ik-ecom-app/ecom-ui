import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  signupForm:FormGroup;

  constructor(private formBuilder:FormBuilder,private router:Router){
    this.signupForm=this.formBuilder.group({
      email: ['',    [Validators.required,Validators.email]],
      username: ['', [Validators.required,Validators.minLength(6)]],
      password: ['', [Validators.required,Validators.minLength(6)]]
    })
  }
  moveToLoginPage(){
    this.router.navigate(['/login'])
  }
  onSubmit(){

  }
}

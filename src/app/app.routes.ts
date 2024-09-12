import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
{ path: 'login', component: LoginComponent }, // Route for login
{ path: 'sign-up', component: SignUpComponent },   // Route for user
{ path: '', redirectTo: '/login', pathMatch: 'full' } // Redirect to login on empty path
];

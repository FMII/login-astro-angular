import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  token: string | null = null;

  constructor (private authServie: AuthService) { }

  login(): void {
    this.authServie.loginUser(this.credentials)
      .subscribe(
        (response: any) => {
          console.log('Token:', response.token);
          this.token = response.token; 
        },
        error => {
          console.error('Error al iniciar sesión:', error);
        }
      );
  }
}

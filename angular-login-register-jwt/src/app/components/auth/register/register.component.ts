import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userData = {
    name: '',
    lastname: '',
    email: '',
    password: ''
  };

  constructor(private authService:AuthService) { }

  register() {
    this.authService.registerUser(this.userData)
      .subscribe(
        response => {
          console.log('Usuario registrado exitosamente:', response);
        },
        error => {
          console.error('Error al registrar usuario:', error);
        }
      );
  }

}

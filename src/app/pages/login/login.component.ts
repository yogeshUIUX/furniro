import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

interface LoginResponse {
  result?: boolean;
  message?: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginObj = {
    EmailId: '',
    password: ''
  };
  isSubmitting = false;
  errorMessage = '';

  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);

  onLogin(): void {
    if (this.isSubmitting) {
      return;
    }

    this.errorMessage = '';
    this.isSubmitting = true;
debugger;
    this.http.post<LoginResponse>('https://projectapi.gerasim.in/api/UserApp/login', this.loginObj).subscribe({
      next: (response) => {
        if (response?.result) {
          void this.router.navigateByUrl('LayoutComponent');
          return;
        }

        this.errorMessage = response?.message || 'Email or password is incorrect.';
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage = error.error?.message || 'We could not sign you in. Please check your details and try again.';
        this.isSubmitting = false;
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }
}

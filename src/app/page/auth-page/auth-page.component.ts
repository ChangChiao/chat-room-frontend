import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css',
})
export class AuthPageComponent {
  http = inject(HttpClient);
  loginByGoogle() {
    this.http.get<any>('/api/v1/google').subscribe((config) => {
      // process the configuration.
      console.log('config', config);
    });
  }
}

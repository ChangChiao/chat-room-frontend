import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/services/http-service';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss',
})
export class AuthPageComponent implements OnInit {
  #http = inject(HttpService);
  googleOAuthUrl = '/api/v1/auth/google';

  ngOnInit() {}

  loginByGoogle() {
    this.#http.get<any>('/auth/google').subscribe((config) => {
      console.log('config', config);
    });
  }

  login() {
    this.#http.post<any>('/users', {}).subscribe((config) => {
      console.log('configuration', config);
    });
  }
}

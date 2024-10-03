import { inject, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from 'src/app/services/http-service';

@Component({
  selector: 'app-chat-list-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-list-page.component.html',
  styleUrl: './chat-list-page.component.scss',
})
export class ChatListPageComponent implements OnInit {
  #http = inject(HttpService);

  getUserInfo() {
    this.#http.get<any>('/users').subscribe((res) => {
      console.log('user-response', res);
    });
  }

  ngOnInit() {
    this.getUserInfo();
  }
}

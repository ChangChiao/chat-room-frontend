import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-room',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="chat-container">
      <div class="chat-messages">
        <div class="message received">Hello! How are you?</div>
        <div class="message sent">
          Hi there! I'm doing great, thanks for asking.
        </div>
        <div class="message received">
          That's wonderful to hear! What are your plans for today?
        </div>
      </div>
      <div class="chat-input">
        <input type="text" placeholder="Type a message..." />
        <button>Send</button>
      </div>
    </div>
  `,
  styleUrl: './chat-room.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatRoomComponent {}

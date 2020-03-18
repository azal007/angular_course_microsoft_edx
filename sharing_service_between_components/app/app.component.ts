import { Component } from '@angular/core';
import { MessageService } from './messages.service';

@Component({
  selector: 'app',
  templateUrl: 'app/views/app.component.html',
  providers: [MessageService]
})
export class AppComponent {
  private appMessage: string;
  constructor(private _messageService : MessageService) {
    this.appMessage = _messageService.getErrorMessage();
  }
}
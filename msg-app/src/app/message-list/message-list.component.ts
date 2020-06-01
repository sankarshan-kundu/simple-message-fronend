import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { MessageService } from '../message.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  messages$: Observable<Message[]>

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.messages$ = this.messageService.getMessages()
  }

}

import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  message$: Observable<Message>

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const msgId = params.get('id')
      if (msgId == 'new') {
        this.message$ = of({ id: undefined, messageText: '' })
      } else {
        this.message$ = this.messageService.getMessage(+msgId)
      }
    })
  }

  dataChanged(newMsg: string) {
    this.message$.subscribe(msg => {
      this.message$ = of({ ...msg, messageText: newMsg })
    })
  }

  saveMessage() {
    this.message$.subscribe(msg => {
      if (!!msg.messageText) {
        if (msg.id !== undefined) {
          this.messageService.updateMessage(msg).subscribe(m => {
            console.info('Message updated.')
            this.router.navigate(['/messages'])
          })
        } else {
          this.messageService.newMessage(msg).subscribe(m => {
            console.info('Message created.')
            this.router.navigate(['/messages'])
          })
        }
      }
    })
  }

  deleteMessage() {
    this.message$.subscribe(msg => {
      if (msg.id !== undefined) {
        this.messageService.deleteMessage(msg.id).subscribe(m => {
          console.info('Message deleted.')
          this.router.navigate(['/messages'])
        })
      }
    })
  }
}

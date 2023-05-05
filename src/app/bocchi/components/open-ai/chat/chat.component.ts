import { Component, OnInit, ViewChild } from '@angular/core';
import { PermissionService } from '@abp/ng.core';
import { Router } from '@angular/router';
import { ChatMessageDto, ChatWebService } from '@proxy/open-ai';
import { ScrollPanel } from 'primeng/scrollpanel';
import { MessageService } from 'primeng/api';

@Component({
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [MessageService]
})
export class ChatComponent implements OnInit {
  messages: ChatMessageDto[] = [];
  loading: boolean = false;
  inputString: string = '';
  @ViewChild('messageScrollPanel')
  messageScrollPanel: ScrollPanel;

  ngOnInit(): void {
    if (!this.permissionService.getGrantedPolicy('OpenAi.Chat')) {
      this.router.navigateByUrl('/').then();
    }
  }

  constructor(private permissionService: PermissionService,
              private router: Router,
              private chatService: ChatWebService,
              private messageService: MessageService) {
  }

  SendMessage() {
    if (this.inputString.length == 0) {
      this.messageService.add({ severity: 'warn', summary: '警告', detail: '不能发送空消息！' });
      return;
    }
    this.messageScrollPanel.scrollTop(Number.MAX_VALUE);
    this.loading = true;
    this.messages.push({ role: 'user', content: this.inputString });

    this.chatService.chatByMessages(this.messages)
      .subscribe({
        next: resp => {
          this.messages.push({ role: 'assistant', content: resp });
          this.messageScrollPanel.scrollTop(Number.MAX_VALUE);
        },
        error: err => {
          this.messageService.add({ severity: 'error', summary: '错误', detail: err.message });
        },
        complete: () => {
          this.inputString = '';
          this.loading = false;
        }
      });


  }
}

import { Component, OnInit } from '@angular/core';
import { ComicSubscriptionDto, ComicSubscriptionWebService } from '@proxy/sora/comic-subscription';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  templateUrl: './comic-subscription.component.html'
})
export class ComicSubscriptionComponent implements OnInit {
  comicSubscriptions: ComicSubscriptionDto[];

  constructor(private messageService: MessageService,
              private comicSubscriptionService: ComicSubscriptionWebService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.comicSubscriptionService.getComicSubscriptionList()
      .subscribe({
        next: resp => {
          this.comicSubscriptions = resp;
        },
        error: err => {

          this.messageService.add({ severity: 'error', summary: '错误', detail: err.error.error.code });
        }
      });
  }

  delComicSubscription(event: Event, comicId: string) {
    this.confirmationService.confirm({
      target: event.target,
      message: `确定取消订阅番剧${comicId}吗？`,
      acceptLabel: '是',
      rejectLabel: '否',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.comicSubscriptionService.delComicSubscriptionByComicId(comicId)
          .subscribe({
            next: () => {
              for (let i = 0; i < this.comicSubscriptions.length; i++) {
                if (this.comicSubscriptions[i].comicId === comicId) {
                  this.comicSubscriptions.splice(i--, 1);
                }
              }
              this.messageService.add({ severity: 'info', summary: '删除成功', detail: `番剧ID${comicId}` });
            },
            error: err => {
              this.messageService.add({ severity: 'error', summary: '错误', detail: err.error.error.code });
            }
          });
      }
    });
  }
}

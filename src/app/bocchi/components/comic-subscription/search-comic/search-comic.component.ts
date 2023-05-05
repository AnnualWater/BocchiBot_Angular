import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ComicSubscriptionWebService, SearchComicListItemDto } from '@proxy/sora/comic-subscription';

@Component({
  templateUrl: './search-comic.component.html',
  styleUrls: ['search-comic.component.scss']
})
export class SearchComicComponent {
  searchKey: string = '';
  searchComicList: SearchComicListItemDto[] = [];

  constructor(private messageService: MessageService,
              private comicSubscriptionService: ComicSubscriptionWebService) {
  }

  search() {
    if (this.searchKey.length === 0) {
      this.messageService.add({ severity: 'warn', summary: '警告', detail: '搜索关键字不能为空' });
      return;
    }
    this.comicSubscriptionService.searchComicBySearch(this.searchKey)
      .subscribe({
        next: resp => {
          this.searchComicList = resp;
        },
        error: err => {
          console.log(err);
          this.messageService.add({ severity: 'error', summary: '错误', detail: err.error.error.code });
        }
      });
  }

  subscriptionComic(comicId: string) {
    this.comicSubscriptionService.subscribeComicByComicId(comicId).subscribe({
        next: () => {
          this.messageService.add({ severity: 'info', summary: '订阅成功', detail: `番剧ID${comicId}` });
        },
        error: err => {
          console.log(err);
          this.messageService.add({ severity: 'error', summary: '错误', detail: err.error.error.code });
        }
      }
    );
  }
}

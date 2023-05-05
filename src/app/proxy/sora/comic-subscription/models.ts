import type { EntityDto } from '@abp/ng.core';

export interface ComicSubscriptionDto extends EntityDto<string> {
  createUserId: number;
  comicId?: string;
  title?: string;
  episode?: string;
  updateInfo?: string;
  newLink?: string;
  isEnd: boolean;
}

export interface SearchComicListItemDto {
  imgUrl?: string;
  comicId?: string;
  title?: string;
  updateInfo?: string;
}

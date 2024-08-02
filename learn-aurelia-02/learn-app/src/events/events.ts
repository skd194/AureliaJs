import { inject } from 'aurelia-framework';
import { DataCache } from '../services/data-cache';

@inject('Cache')
export class Events {

  constructor(readonly _dataCache: DataCache) {
    _dataCache.data.push('a');
  }

  events: IEvent[] = [
    { "id": 1, title: "Aurelia JS fundamentals course!" },
    { "id": 2, title: "Dotnet core beginners course!" }
  ];
}

export interface IEvent {
  id: number;
  title: string
}

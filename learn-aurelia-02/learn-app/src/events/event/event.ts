import { inject } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { useView } from 'aurelia-templating';
import { IEvent } from '../events'
import { DataCache } from '../../services/dataCache';

@useView(PLATFORM.moduleName('/src/events/event/event.html'))
@inject('Cache')
export class Event {
  constructor(readonly _dataCache: DataCache) {
    _dataCache.data.push('b');
    _dataCache.data.push('c');
  }

  item: IEvent[]

  activate(bindingContext: IEvent[]) {
    this.item = bindingContext
  }
}

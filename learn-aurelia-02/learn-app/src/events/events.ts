import { Plugin2 } from './../services/all-di/plugin-2';
import { inject, Lazy, All } from 'aurelia-framework';
import { DataCache } from '../services/data-cache';
import { LazyInject } from '../services/lazy-inject';
import { Plugin1 } from '../services/all-di/plugin-1';
import { DataRepository } from '../services/data-repository';

type SuperPlugin = (Plugin1 | Plugin2);

@inject('Cache', Lazy.of(LazyInject), All.of('SuperPlugin'), DataRepository)
export class Events {
  private events: IEvent[];
  constructor(
    readonly _dataCache: DataCache,
    private readonly _lazyOfLazyInject: () => LazyInject,
    readonly plugins: SuperPlugin[],
    public readonly _dataRepository: DataRepository,
  ) {
    _dataCache.data.push('a');
    plugins.forEach((plugin: SuperPlugin) => {
      plugin.doPluginStuff();
    });

    _dataRepository.getEvents()
      .then(events => {
        this.events = events.map(e => {
          const event: IEvent = {
            id: e.id,
            title: e.title,
            dateTime: e.dateTime,
            description: e.description,
            image: e.image,
          }
          return event;
        });
      });

  }

  createAndUseLazy() {
    console.log('about to use lazy');
    this._lazyOfLazyInject().doStuff();
  }
}

export interface IEvent {
  id: number;
  title: string;
  dateTime: string,
  description: string,
  image: string,
}

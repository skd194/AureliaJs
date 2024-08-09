import { Plugin2 } from './../services/all-di/plugin-2';
import { inject, Lazy, All } from 'aurelia-framework';
import { DataCache } from '../services/data-cache';
import { LazyInject } from '../services/lazy-inject';
import { Plugin1 } from '../services/all-di/plugin-1';
import { DataRepository } from '../services/data-repository';

type SuperPlugin = (Plugin1 | Plugin2);

@inject('Cache', Lazy.of(LazyInject), All.of('SuperPlugin'))
@inject(DataRepository)
export class Events {
  private events: IEvent[];
  constructor(
    private readonly _lazyOfLazyInject: () => LazyInject,
    public readonly _dataRepository: DataRepository,
    readonly _dataCache: DataCache,
    readonly plugins: SuperPlugin[],

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
            title: e.title
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
  title: string
}

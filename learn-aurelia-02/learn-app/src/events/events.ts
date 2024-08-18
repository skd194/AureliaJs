import { Router } from 'aurelia-router';
import { RouteConfig, NavigationInstruction } from 'aurelia-router';
import { Plugin2 } from './../services/all-di/plugin-2';
import { inject, Lazy, All } from 'aurelia-framework';
import { DataCache } from '../services/data-cache';
import { LazyInject } from '../services/lazy-inject';
import { Plugin1 } from '../services/all-di/plugin-1';
import { DataRepository } from '../services/data-repository';

type SuperPlugin = (Plugin1 | Plugin2);

@inject('Cache', Lazy.of(LazyInject), All.of('SuperPlugin'), DataRepository, Router)
export class Events {
  private events: IEvent[];
  constructor(
    readonly _dataCache: DataCache,
    private readonly _lazyOfLazyInject: () => LazyInject,
    readonly plugins: SuperPlugin[],
    private readonly _dataRepository: DataRepository,
    private readonly _router: Router
  ) {
    _dataCache.data.push('a');
    plugins.forEach((plugin: SuperPlugin) => {
      plugin.doPluginStuff();
    });
  }

  activate(params: { speaker: string, topic: string }, routeConfig: RouteConfig, navigationInstruction: NavigationInstruction) {
    this._dataRepository.getEvents()
      .then(events => {
        let filterAppliedEvents = events
        if (params.speaker || params.topic) {
          filterAppliedEvents = events
            .filter(e =>
              e.speaker.toLowerCase().indexOf(params.speaker.toLowerCase()) > -1 ||
              e.title.toLowerCase().indexOf(params.topic.toLowerCase()) > -1
            );
        }
        this.events = filterAppliedEvents.map(e => {
          const event: IEvent = {
            id: e.id,
            title: e.title,
            dateTime: e.dateTime,
            description: e.description,
            image: e.image,
            detailUrl: this._router.generate('event-detail', { eventId: e.id })
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
  detailUrl?: string
}

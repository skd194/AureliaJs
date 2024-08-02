import { Plugin2 } from './../services/all-di/plugin-2';
import { inject, Lazy, All } from 'aurelia-framework';
import { DataCache } from '../services/data-cache';
import { LazyInject } from '../services/lazy-inject';
import { Plugin1 } from '../services/all-di/plugin-1';

type SuperPlugin = (Plugin1 | Plugin2);

@inject('Cache', Lazy.of(LazyInject), All.of('SuperPlugin'))
export class Events {

  constructor(
    readonly _dataCache: DataCache,
    private readonly _lazyOfLazyInject: () => LazyInject,
    readonly plugins: SuperPlugin[]
  ) {
    _dataCache.data.push('a');
    plugins.forEach((plugin: SuperPlugin) => {
      plugin.doPluginStuff();
    });
  }

  events: IEvent[] = [
    { "id": 1, title: "Aurelia JS fundamentals course!" },
    { "id": 2, title: "Dotnet core beginners course!" }
  ];

  createAndUseLazy() {
    console.log('about to use lazy');
    this._lazyOfLazyInject().doStuff();
  }
}

export interface IEvent {
  id: number;
  title: string
}

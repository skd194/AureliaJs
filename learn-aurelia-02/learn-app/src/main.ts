import { Aurelia } from 'aurelia-framework';
import environment from '../config/environment.json';
import { PLATFORM } from 'aurelia-pal';
import 'bootstrap';
import { DataCache } from './services/data-cache';
import { Plugin1 } from './services/all-di/plugin-1';
import { Plugin2 } from './services/all-di/plugin-2';

export function configure(aurelia: Aurelia): void {

  // aurelia.use.transient(DataCache); // this option enables us to register it at framework level rather than applying the attribute

  aurelia.use.transient("SuperPlugin", Plugin1);
  aurelia.use.transient("SuperPlugin", Plugin2);

  const cache = new DataCache();
  cache.data.push('1')
  cache.data.push('2')
  cache.data.push('3')
  aurelia.use.instance("Cache", cache);

  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}

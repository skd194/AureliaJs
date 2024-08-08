import { PLATFORM } from 'aurelia-pal';
import { useView } from 'aurelia-templating';
import { RouterConfiguration, Router } from 'aurelia-router';

@useView(PLATFORM.moduleName('app.html'))
export class App {

  constructor(private router: Router) {

  }

  public message = '> message from App - [Root]';

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Events';
    config.map([
      { route: ['', 'home', 'events'], name: 'Home', moduleId: PLATFORM.moduleName('./events/events'), nav: true, title: 'Events' },
      { route: ['discussion'], name: 'Discussion', moduleId: PLATFORM.moduleName('./discussion/discussion'), nav: true, title: 'Discussion' },
      { route: ['jobs'], name: 'JobBoard', moduleId: PLATFORM.moduleName('./jobs/jobs'), nav: true, title: 'Jobs' }
    ]);
  }

}

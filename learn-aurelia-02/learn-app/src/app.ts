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
      {
        name: 'Home',
        route: ['', 'home', 'events'],
        moduleId: PLATFORM.moduleName('./events/events'),
        nav: true,
        title: 'Events'
      },
      {
        name: 'Discussion',
        route: ['discussion'],
        moduleId: PLATFORM.moduleName('./discussion/discussion'),
        nav: true,
        title: 'Discussion'
      },
      {
        name: 'JobBoard',
        route: ['jobs'],
        moduleId: PLATFORM.moduleName('./jobs/jobs'),
        nav: true,
        title: 'Jobs'
      },
      {
        name: "event-detail",
        route: 'event-detail/:eventId',
        moduleId: PLATFORM.moduleName('./events/event-detail/event-detail'),
      },
    ]);
  }

}

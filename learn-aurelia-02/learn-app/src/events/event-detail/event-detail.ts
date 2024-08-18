import { Router } from 'aurelia-router';
import { RouteConfig, NavigationInstruction } from 'aurelia-router';
import { inject } from 'aurelia-framework';
import { DataRepository } from '../../services/data-repository';
import { IEvent } from '../events';

@inject(DataRepository, Router)
export class EventDetail {
  event: IEvent;

  constructor(readonly dataRepository: DataRepository, private readonly _router: Router) {
    this.dataRepository = dataRepository;
  }

  activate(params: { eventId: string }, routeConfig: RouteConfig, navigationInstruction: NavigationInstruction) {
    const dataEventId = parseInt(params.eventId)
    this.dataRepository.getEvent(dataEventId)
      .then(ed => {
        this.event = ed
      });
  }

  goToEvents() {
    this._router.navigateToRoute('events');
  }
}

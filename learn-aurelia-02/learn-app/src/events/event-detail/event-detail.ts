import { RouteConfig, NavigationInstruction } from 'aurelia-router';
import { inject } from 'aurelia-framework';
import { DataRepository } from '../../services/data-repository';
import { IEvent } from '../events';

@inject(DataRepository)
export class EventDetail {
  event: IEvent;

  constructor(readonly dataRepository: DataRepository) {
    this.dataRepository = dataRepository;
  }

  activate(params: { eventId: string }, routeConfig: RouteConfig, navigationInstruction: NavigationInstruction) {
    const dataEventId = parseInt(params.eventId)
    this.dataRepository.getEvent(dataEventId)
      .then(ed => {
        this.event = ed
      });
  }
}

import { eventsData, IEventData } from './events-data';
import moment from 'moment';

export class DataRepository {
  constructor() {
  }

  getEvents(): Promise<IEventData[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let events = eventsData;
        events.forEach(e => {
          e.dateTime = moment(e.dateTime).format('MM/DD/YYYY HH:mm')
        })
        resolve(events);
      }, 2000);
    });
  }

  getEvent(id: number): Promise<IEventData> {
    return this.getEvents()
      .then(events => {
        return events.find(x => x.id === id);
      });
  }
}

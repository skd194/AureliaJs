import { eventsData, IEventData } from './events-data';
import moment from 'moment';

export class DataRepository {
  private events: IEventData[];
  constructor() {
    this.events = eventsData
  }

  getEvents(): Promise<IEventData[]> {
    return new Promise((resolve, reject) => {
      if (!this.events) {
        setTimeout(() => {
          this.events = eventsData;
          this.events.forEach(e => {
            e.dateTime == moment(e.dateTime).format('MM/DD/YYYY HH:mm')
          })
          resolve(this.events);
        }, 2000);
      }
      else {
        resolve(this.events);
      }
    });
  }

  getEvent(id: number): Promise<IEventData> {
    return new Promise((resolve, reject) => {
      const event = this.events.find(x => x.id === id);
      if (event) {
        resolve(event)
      } else {
        reject({ "message": "Invoke getEvents method before accessing the getEvent method" })
      }
    });
  }

}

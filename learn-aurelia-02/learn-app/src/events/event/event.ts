import { PLATFORM } from 'aurelia-pal';
import { useView } from 'aurelia-templating';
import { IEvent } from '../events'

@useView(PLATFORM.moduleName('/src/events/event/event.html'))
export class Event {
  item: IEvent[]

  activate(bindingContext: IEvent[]) {
    this.item = bindingContext
  }
}

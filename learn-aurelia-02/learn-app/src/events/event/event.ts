import { IEvent } from '../events'

export class Event {
  item: IEvent[]

  activate(bindingContext: IEvent[]) {
    this.item = bindingContext
  }
}

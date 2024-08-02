import { transient, singleton } from 'aurelia-framework'

@transient()
// @singleton() // this is default behavior
export class DataCache {
  data: string[];
  constructor() {
    this.data = [];
    console.log("DataCache constructor invoked!!")
  }
}

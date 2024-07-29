import { PLATFORM } from 'aurelia-pal';
import { useView } from 'aurelia-templating';

@useView(PLATFORM.moduleName('app.html'))
export class App {
  public message = '> message from App - [Root]';
}

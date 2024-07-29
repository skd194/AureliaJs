export class Events {
  events: IEvent[] = [
    { "id": 1, title: "Aurelia JS fundamentals course!" },
    { "id": 2, title: "Dotnet core beginners course!" }
  ];
}

export interface IEvent {
  id: number;
  title: string
}

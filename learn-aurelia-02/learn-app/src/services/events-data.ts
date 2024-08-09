export const eventsData: IEventData[] = [
  {
    id: 1,
    description: "",
    dateTime: "",
    title: "Aurelia JS fundamentals course!",
    speaker: "",
    image: ""
  },
  {
    id: 2,
    description: "",
    dateTime: "",
    title: "Dotnet core beginners course!",
    speaker: "",
    image: ""
  }
]

export interface IEventData {
  id: number,
  description: string,
  dateTime: string,
  title: string,
  speaker: string,
  image: string
}

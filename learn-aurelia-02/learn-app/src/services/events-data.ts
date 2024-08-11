export const eventsData: IEventData[] = [
  {
    id: 1,
    description: `
    JavaScript framework that empowers developers to build dynamic, maintainable, and high-performance web applications with ease. In this comprehensive course, you'll dive into the fundamentals of Aurelia, learning how to leverage its elegant, convention-over-configuration approach to create robust applications.
    Starting from the basics, you'll explore Aurelia's powerful templating engine, data binding, dependency injection, and routing capabilities. Through hands-on examples and real-world scenarios, you'll gain practical experience in building scalable single-page applications (SPAs) that are modular, testable, and easy to maintain.
    `,
    dateTime: "2023-10-15T14:22:35.000Z",
    title: "Aurelia JS fundamentals course!",
    speaker: "John Brit",
    image: "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU"
  },
  {
    id: 2,
    description: `
    Step into the world of modern software development with .NET Core, Microsoft's powerful, open-source, cross-platform framework for building applications. 
    This beginner-friendly course is designed to guide you through the foundational concepts and tools of .NET Core, making it accessible even if you're new to programming.
    `,
    dateTime: "2023-10-15T08:45:12.000Z",
    title: "Dotnet core beginners course!",
    speaker: "Nodi Modi",
    image: "https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ"
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

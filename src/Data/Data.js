import uniqid from "uniqid";
export const USERS = [
  {
    id: uniqid(),
    fullname: "Mario Rossi",
    email: "test@gmail.com",
    password: "test",
    projects: [
      {id: uniqid(), title: 'Dashboard Project', tags: [], dueDate: '', description: '', subtasks: [], completed: false}
    ],
    tasks: [
      {
        id: uniqid(),
        title: "studiare matematica",
        category: "study",
        dueDate: 'Due date: June 23 2023 8:30',
        urgent:  true,
        completed: false,
      },
      {
        id: uniqid(),
        title: "lavorare progetto 1 ",
        category: "work",
        urgent:  false,
        completed: false,
        dueDate: 'Due date: June 23 2023 8:30',


      },
      {
        id: uniqid(),
        title: "studiare francese",
        category: "study",
        urgent:  true,
        completed: false,
        dueDate: 'Due date: June 23 2023 8:30',


      },
      {
        id: uniqid(),
        title: "studiare inglese",
        category: "study",
        urgent:  true,
        completed: false,
        dueDate: 'Due date: June 23 2023 8:30',


      },
      {
        id: uniqid(),
        title: "studiare fisica",
        category: "study",
        urgent:  false,
        completed: false,
        dueDate: 'Due date: June 23 2023 8:30',


      },
    ],
  },
  {
    id: uniqid(),
    fullname: "Jessica Moretti",
    email: "jessicamoretti@gmail.com",
    password: "jessica",
    categories: [],
    projects: [
      {id: uniqid(), title: 'Romanzo', tags: [], dueDate: '', description: '', subtasks: [], completed: false}
    ],
    tasks: [
      {
        id: uniqid(),
        title: "fare spesa",
        urgent:  true,
        category: "home",
        completed: false,
        dueDate: 'Due date: June 23 2023 8:30',


      },
      {
        id: uniqid(),
        title: "andare al compleanno di Mario ",
        urgent:  true,
        category: "friends",
        completed: false,
        dueDate: 'Due date: June 23 2023 8:30',


        
      },
    ],
  },
];




 export const CURRENTUSER = [];




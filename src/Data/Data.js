import uniqid from "uniqid";
export const USERS = [
  {
    id: uniqid(),
    fullname: "Mario Rossi",
    email: "test@gmail.com",
    password: "test",
    categories: [],
    tasks: [
      {
        id: uniqid(),
        title: "studiare matematica",
        category: "study",
      
        priority: "high",
        completed: false,
        subtasks: [{ id: uniqid(), title: "es 1", completed: false }],
      },
      {
        id: uniqid(),
        title: "lavorare progetto 1 ",
        category: "work",
        priority: "medium",
        completed: false,
        subtasks: [{ id: uniqid(), title: "primo step", completed: false }],
      },
      {
        id: uniqid(),
        title: "studiare francese",
        category: "study",
        priority: "high",
        completed: false,
        subtasks: [{ id: uniqid(), title: "es 1", completed: false }],
      },
      {
        id: uniqid(),
        title: "studiare inglese",
        category: "study",
        priority: "high",
        completed: false,
        subtasks: [{ id: uniqid(), title: "es 1", completed: false }],
      },
      {
        id: uniqid(),
        title: "studiare fisica",
        category: "study",
        priority: "high",
        completed: false,
        subtasks: [{ id: uniqid(), title: "es 1", completed: false }],
      },
    ],
  },
  {
    id: uniqid(),
    fullname: "Jessica Moretti",
    email: "jessicamoretti@gmail.com",
    password: "jessica",
    categories: [],

    tasks: [
      {
        id: uniqid(),
        title: "fare spesa",
        priority: "low",
        category: "home",
        completed: false,
        subtasks: [{ id: uniqid(), title: "patate", completed: false }],
      },
      {
        id: uniqid(),
        title: "andare al compleanno di Mario ",
        priority: "low",
        category: "friends",
        completed: false,
        subtasks: [
          { id: uniqid(), title: "comprare regalo", completed: false },
        ],
      },
    ],
  },
];




 export const CURRENTUSER = [];




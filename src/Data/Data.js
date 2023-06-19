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
        dueDate: '',
        priority: "high",
        completed: false,
        tagsCategory: [],
      },
      {
        id: uniqid(),
        title: "lavorare progetto 1 ",
        category: "work",
        priority: "medium",
        completed: false,
        dueDate: '',
        tagsCategory: [],


      },
      {
        id: uniqid(),
        title: "studiare francese",
        category: "study",
        priority: "high",
        completed: false,
        dueDate: '',
        tagsCategory: [],


      },
      {
        id: uniqid(),
        title: "studiare inglese",
        category: "study",
        priority: "high",
        completed: false,
        dueDate: '',
        tagsCategory: [],


      },
      {
        id: uniqid(),
        title: "studiare fisica",
        category: "study",
        priority: "high",
        completed: false,
        dueDate: '',
        tagsCategory: [],


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
        priority: "low",
        category: "home",
        completed: false,
        dueDate: '',
        tagsCategory: [],


      },
      {
        id: uniqid(),
        title: "andare al compleanno di Mario ",
        priority: "low",
        category: "friends",
        completed: false,
        dueDate: '',
        tagsCategory: [],


        
      },
    ],
  },
];




 export const CURRENTUSER = [];




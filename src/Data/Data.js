import uniqid from "uniqid";
export const USERS = [
  {
    id: uniqid(),
    fullname: "Mario Rossi",
    email: "test@gmail.com",
    password: "test",
    location: 'roma',
   
    articles: [],
    tasks: [
     
    ],
  },
  {
    id: uniqid(),
    fullname: "Jessica Moretti",
    email: "jessicamoretti@gmail.com",
    password: "jessica",
    location: 'ascoli piceno',

    categories: [],
    articles: [],

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




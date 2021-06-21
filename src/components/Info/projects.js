import giftEzgif from "../Gifs/giftEzgif.gif";
import dateButlergif from "../Gifs/dateButlergif.gif";
import employeeDirectorygif from "../Gifs/employeeDirectorygif.gif";

const projects = [
  {
    id: 1,
    projectName: "GiftEZ",
    exampleGif: giftEzgif,
    summary:
      "GiftEZ helps users create personalized wishlist and gives them the option to email them to their friends and family. The user can name their Wishlist fun names to make it more inviting, but still includes a direct link the to the specific item they want to share.",
    techUsed:
      "HTML, Tailwind, Axios, Express, Nodemailer, MySql2,Sequelize, and this project is deployed with Heroku.",
    githubLink: "https://github.com/Fiskoal/giftez",
    deployedLink: "https://giftez.herokuapp.com/",
  },
  {
    id: 2,
    projectName: "Date Butler",
    exampleGif: dateButlergif,
    summary:
      "DateButler gives random cocktail, meal and movie suggestions based off either no user input or basic user input. It provides ingredients and instructions or a link to more information. It provides a movie title and movie description.",
    techUsed:
      "Tech Used: HTML, JavaScript, CSS, Bootstrap 5, JQuery, Googlefonts, API: TheMealDB, TheCocktailDB, TMDb",
    githubLink: "https://github.com/crudd03/date-butler",
    deployedLink: "https://crudd03.github.io/date-butler/",
  },
  {
    id: 3,
    projectName: "Employee Directory",
    exampleGif: employeeDirectorygif,
    summary:
      "A simple employee directory application built with React and Material-UI. The name column is sortable (asc & desc) and you can search for a specific name in the search bar. The user can view 100 employees per page.",
    techUsed:
      "Tech Used: HTML 5, CSS3, JavaScript, ReactJS, JSX,  and Moment.js",
    githubLink: "https://github.com/UseTheHill/employee_directory",
    deployedLink: "https://usethehill.github.io/employee_directory/",
  },
];

export default projects;

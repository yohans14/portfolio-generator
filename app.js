const inquirer = require("inquirer");
// //requiring core libarary in Node.js
// const fs = require("fs");
// const generatePage = require("./src/page-template");

// const pageHTML = generatePage(name, github);

// fs.writeFile("index.html", generatePage(name, github), (err) => {
//   if (err) throw err;

//   console.log("Portfolio complete! Check out index.html to see the output!");
// });
inquirer
  .prompt([
    {
      type: "input",
      name: "Name",
      message: "whats is your name?",
    },
  ])
  .then((answer) => console.log(answer));

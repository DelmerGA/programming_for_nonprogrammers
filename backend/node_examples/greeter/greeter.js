var readlineSync = require("readline-sync");

var name = readlineSync.question("What's your name?");

console.log("Welcome", name);


// while(true) {
//   var input  = readlineSync.question("> ");
//   var result = eval(input);
//   console.log(result);
// }
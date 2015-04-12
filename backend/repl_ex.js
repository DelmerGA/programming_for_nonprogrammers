
var readlineSync = require('readline-sync');


while(true) {
var input = readlineSync.question('type something >')
console.log("=>", eval(input));
}
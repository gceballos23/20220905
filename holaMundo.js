console.log('hola desde nodejs');
let readlineSync = require('readline-sync');
let primeraPersona = readlineSync.question("indique la altura de la persona: ");
let segundaPersona = readlineSync.question("indique la altura de la persona: ");
console.log("altura primera persona:")
console.log(primeraPersona);
console.log("altura segunda persona:")
console.log(segundaPersona);
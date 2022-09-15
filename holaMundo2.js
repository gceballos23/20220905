console.log('hola desde nodejs');
let readlineSync = require('readline-sync');
let base= readlineSync.questionInt("indique Base: ");
let altura =  readlineSync.questionInt("indique Base: ");
function calcularSuperficie(baseInt,alturaInt) {
    return baseInt*alturaInt
}
console.log('La Superficie es: ')
console.log(calcularSuperficie(base,altura))

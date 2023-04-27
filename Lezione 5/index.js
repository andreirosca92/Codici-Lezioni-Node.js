/*
05 moduli

- cosa sono i moduli(codice incapsulato) interni, built-in, esterni
- esempio di modulo
- esportare con module.exports
- importare modulo con require
- sintassi alternativa
- funzioni invocate da require
*/

//const saluta = require('./utils') // i .. serve per salire
//const nomi = require('./nomi') //nomeModulo
// console.log(nomi) // 
//console.log(nomi.persona1)
//console.log(nomi.persona2)
// saluta(persona1)
// saluta("Anna")
// saluta(persona2)
//console.log(nomi)
/*
saluta(nomi.persona1)
saluta("Anna")
saluta(nomi.persona2)
*/
//funzione invocato da require
const ciao = require("./utils")
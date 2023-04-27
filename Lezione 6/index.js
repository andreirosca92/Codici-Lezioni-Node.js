/*
06 moduli built-in

- cosa sono i moduli built-in
- importare modulo OS
- userinfo, uptime, version, arch
- importare modulo path
- separator, join (con sottocartelle), basename, resolve (percorsi assoluti)
*/
/*
const os = require('os')
console.log(os.userInfo())
console.log(os.uptime()) //tempo trascorso da quando il computer è accesso in  (sec / 60) /60= ore
console.log(os.arch()) //x64
const prova ={
    nome: os.type(),
    release: os.release(),
    memoria: os.totalmem(),
    disponibile: os.freemem()
}
console.log(prova)
*/
/*
const path = require('path')
console.log(path.sep) // stampa /
*/
const path = require('path')
const percorsoFile = path.join('/cartella', 'sottocartella','prova.txt');
console.log(percorsoFile); // /cartella/sottocartella/prova.txt percorso assoluto
console.log(path.basename(percorsoFile));
const percorsoAssoluto = path.resolve(__dirname, 'cartella' , ' sottocartella' , 'prova.txt'); //ci mostra il percorso assoluto
console.log(percorsoAssoluto);
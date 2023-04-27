/*
14 streams

- cosa sono e come funzionano //flusso di dati divisi (chunks)
- creare file pesante
- leggere il file senza stream
- leggere il file con stream
*/
/*
const {writeFileSync} = require('fs');
for(let i=0; i<10000; i++){
    writeFileSync('./filegrande.txt', `ciao riga numero ${i}\n`, {flag: 'a'});
}
*/

const {createReadStream,readFileSync, writeFileSync} = require('fs');

//const filegrande = readFileSync('./filegrande.txt'); //senza utf-8 mi legge in formato Buffer 75 6e 64...

//console.log(filegrande);

const stream = createReadStream('./filegrande.txt');

stream.on('data', (result) =>{
    console.log(result);
}); // conversione da Buffer in chunks (Buffer divisi grazie allo stream)
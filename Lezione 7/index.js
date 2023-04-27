/*
07 Modulo FS file system

- FS sincrono (readFileSync, writeFileSync)
- Leggere file, scrivere in file (override e append con {flag:a}), creare un file
- FS asincrono (readFile, writeFile)
- sync vs async

*/
/* //modo sincrono
const {readFileSync, writeFileSync} = require('fs')

const prova = readFileSync('./cartella/prova.txt', 'utf-8');
const ciao = readFileSync('./cartella/ciao.txt', 'utf-8');

//writeFileSync('./cartella/prova.txt', '123456', {flag:'a'});
//scrivere in un file che non esiste
writeFileSync('./cartella/bella.txt','bella');
*/
//modo asincrono
/*
const {readFile, writeFile} = require('fs')
const prova = readFile('./cartella/prova.txt', 'utf-8', (error, result) =>{
    if(error){
        console.log(error);
        return
    }
    const prova=result;
    //console.log(prova);
    readFile('./cartella/ciao.txt','utf-8', (error, result) =>{
        if(error){
            console.log(error);
            return;
        }
        const ciao=result;
        //console.log(ciao);
        writeFile('./cartella/bella.txt','ciao ciaoissimo', (error,result) =>{
            if(error){
                console.log(error);
                return;
            }
            const bella=result;
            console.log(bella);

        })
    }
    )

}
);
*/
/*
const {readFileSync, writeFileSync} = require('fs')
console.log("Comincio");
const prova = readFileSync('./cartella/prova.txt', 'utf-8');
const ciao = readFileSync('./cartella/ciao.txt', 'utf-8');
writeFileSync('./cartella/bella.txt','bella');

console.log("ho finito");
console.log("passo al prossimo compito");
*/
console.log("Comincio");
const {readFile, writeFile} = require('fs')
const prova = readFile('./cartella/prova.txt', 'utf-8', (error, result) =>{
    if(error){
        console.log(error);
        return
    }
    const prova=result;
    //console.log(prova);
    readFile('./cartella/ciao.txt','utf-8', (error, result) =>{
        if(error){
            console.log(error);
            return;
        }
        const ciao=result;
        //console.log(ciao);
        writeFile('./cartella/bella.txt','ciao ciaoissimo', (error,result) =>{
            if(error){
                console.log(error);
                return;
            }
            console.log("ho finito");

        })
    }
    )

}
);
console.log("passo al prossimo compito");
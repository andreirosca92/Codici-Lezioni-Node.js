/*
13 Event emitters

- introduzione event driven programing (client/server)
- importare modulo events
- creare un eventEmitter
- metodi on e emit
- passare valori
*/

const EventEmitter = require('events');

const customEmitter = new EventEmitter();
/*
customEmitter.on('messaggio', (nome, anno) => {
    console.log(`ciao sono ${nome} e sono partito nell'anno ${anno}`);

}); //ci isriviamo all'evento messaggio, noi siamo in ascolto e facciamo qualcosa

// esempio chat domanda risposta, notifica push
// customEmitter.on('nuovoPartecipante');
// customEmitter.on('nuovoPartecipante');
// esempio il like di instangram io metto un like su una foto i miei amici ricevono una notifica del mio like (così funzionano gli eventi in real-time)

customEmitter.on('messaggio', (nome) => {
    console.log(nome);

}); 

customEmitter.on('messaggio', () => {
    console.log("ciao non ho niente");

}); 
customEmitter.emit('messaggio', 'edoardo', 2021); //emmittiamo un messaggio
*/
customEmitter.on('messaggio', (nome) => {
    console.log(`ciao sono ${nome}`);

}); 

customEmitter.on('messaggio', (nome) => {
    console.log(nome);

}); 

customEmitter.on('messaggio', () => {
    console.log("ciao non ho niente");

}); 
customEmitter.emit('messaggio', 'ciao oggi esci??');
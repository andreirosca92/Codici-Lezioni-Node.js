/*
 22 Middleware

- cosa sono? funzioni che vengono eseguite durante la richiesta
- pulire codice (lasciare setup base)
- come funziona? req => middleware (next/res) => res
- creiamo un middleware d'esempio per due endpoint (req, res, next)
- il parametro next
- rendiamo il middleware un modulo
- app.use
- app.use solo per alcuni percorsi
- multiple funzioni middleware app.use([func1, func2])
- interrompere il flusso con un middleware (esempio autorizzazione)
- middleware custom / express (static) / terze parti
*/
const express = require('express');
const app = express();
const middlewareProva = require('./middlewareprova');
// prima dei end-point
const auth = require ('./auth');
// al livello pratico middleware non va bene come funzione ma come modulo
/*
const middlewareProva = (req, res, next) => {
    const { method, url }= req;
    const time = new Date().getMinutes();
    console.log(method, url, time);
    next(); // senza next() rimane bloccato nel middleware
    //res.send("dal Middleware");

};
*/
//creamo un array di middleware (middleware custom)
app.use(middlewareProva);
//app.use(express.static('/public'));

//app.use(); middleware terze parti
//app.use('/persone',middlewareProva); // grazie a use ci leviamo middlewareProva da get
app.get('/',(req, res) => {
    res.send("Homepage");
});
//[middlewareProva, auth] se volgio definire un array di funzioni middleware su un percorso
app.get('/about',(req, res)=> {
    res.send("about");
});
/*
// GET / 31 si riferisce a /persone
app.get('/persone/ciao', (req, res)=>{ 
    res.send("persone");
});
*/
app.get('/area', auth, (req, res)=>{
    res.send("area");
})
app.get('/persone/miao',(req, res) =>{
    res.send("persone miao");
})
//app.listen(3002);


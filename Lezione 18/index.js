/*
18 api vs ssr

- API: interfaccia per comunicare con il DB (json, res.json)
- SSR: server side rendering (template, ejs, res.render) // ejs è un modulo/pacchetto serve per mettere una logica , commento privato: jinja2 di python 
// (questo corso si concetra sopratutto, consiglio di Midali perchè lo usa tanto)
API
client (sito, webapp, app smartphone) --> richiesta dati --> API --> interroga DB
API --> manda risposta con dati --> client manda a schermo

SSR //()
client --> richiede pagina --> server --> renderizza pagina con dati all'interno
server --> manda la pagina html completa --> client la mostra

*/
/*
client --> api --> db  // gli api sta tra lo nostra applicazione e database
db --> api --> client 
//(sono framework scritti in JS, frontend client side)     backend server side                        db
angular/react <-------------------------------------------------> api <----------------------------> DB
facebook(client/react) ---> api (node/express) ---> DB
            login con facebook -->api---> db 
            //api private fornite da facebook agli sviluppatori
            //DB sono mongodb e MYSQL
*/
const express = require('express');

const app = express();

app. use(express.static('public'));

app.get('/', (req, res)=>{

    res.sendFile('homepage.html',{root : __dirname + "/public"});
});
// esempio semplice di richiesta pagina lampadina
app.get('/api/lampadine', (req, res)=>{
    res.sendFile('about.html', {root : __dirname + "/public"});
});
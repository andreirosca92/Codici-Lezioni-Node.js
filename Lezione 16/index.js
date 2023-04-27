/*
16 introduzione a Express

- pulizia progetto
- npm init
- installare express, nodemon
- import express
- gestire pagine home, about, contatti

// nodemon aspetta ogni singolo cambiamento che facciamo e automaticamente ricarica il webserver (npm start)
// altri script custom npm run start
*/

const express = require('express');

const app = express(); //metodo express crea un'istanza di express

app.get('/', (req, res) => {
    res.send('<h1>Home</h1>');

});
app.get('/about', (req,res) =>{
    res.send('<h1>About</h1>');
});
app.get('/contatti', (req, res)=>{
    res.send('<h1>Contatti</h1>');
});
app.all('*', (req,res) =>{
    res.send('<h1>risorsa non trovata<h1>');
});//'*' sta a qualsiasi cosa come url. metodo all() a prescindere che sia GET, PUT, ecc.

//app.listen(3000); //senza il metodo get() cosi apriamo la pagina e ci dara' Cannot GET /
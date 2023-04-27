/*
 28 Routing

 - creare file per router
 - importare modulo
 - utilizzare il router
 - esempio con piu' routes
*/

const express = require('express');

const app = express();
const personeRouter = require('./routes/persone');
const prodottiRouter = require('./routes/prodotti');
app.use(express.json());
app.use('/api/persone', personeRouter);
app.use('/api/prodotti', prodottiRouter);
app.listen(3003);


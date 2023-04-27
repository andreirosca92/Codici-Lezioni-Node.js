/*
20 Ruote Param

- mapping per non mandare tutti i dati
- come richiedere i dati di un oggetto specifico(hardcode)
- richiedere singolo elemento con Route Parameter
- id number vs string
- gestione param non esistente
- esempio route param complessi
*/

const express = require('express');

const app = express();

const {persone} = require('./persone');

app.get('/', (req, res) =>{
    res.send("<h1>Homepage</h1><a href='/persone'>Vai a persone</a>");
});

app.get('/persone', (req, res) =>{
    const nuovePersone = persone.map((persona) =>{
        const {nome, cognome, eta}=persona;
        return {nome, cognome, eta};
    });
    res.json(nuovePersone);
    //res.json(persone);
});
app.get('/persone/:id', (req, res)=>{
    console.log(req.params);
    const {id} = req.params;
    const personaID = req.params.id;
    const persona = persone.find((persona)=> persona.id === personaID); //se sono numeri converitire con Number()
    if(!persona){
        return res.status(404).json({messaggio:"non trovato", code : 404}); //send("Prodotto non trovato");
    }
    res.json(persona);
});
// fino a 10 persone è gestibile, ma non è scalabile bisogna fare un'astrazione
app.get('/persone/:id', (req, res)=>{
    console.log(req.params);
    const {id} = req.params;
    const personaID = req.params.id;
    const persona = persone.find((persona)=> persona.id === personaID);
    if(!persona){
        return res.status(404).json({messaggio: "non trovato", code: 404}); //send("Prodotto non trovato");
    }
    res.json(persona);
});
//app.get('/prodotti/:idProdotto/recensioni/:idRecensione', (req, res){});
//app.listen(3001);
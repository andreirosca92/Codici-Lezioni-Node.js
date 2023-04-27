/*
21 Query String Parameter (URL param)

- esempio di query string
- aggiungere delle persone
- aggiungere rout d'esempio per la ricerca
- utilizziamo req.query
- search e limit
- gestire risultato vuoto
// (query juventus) esempio juventus su google.com  copiamo l'URL fino a search endpoint dopo ? sono parametri
*/
const express = require('express');

const app = express();

const { persone } = require('./persone');

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
/*
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
*/
// fino a 10 persone è gestibile, ma non è scalabile bisogna fare un'astrazione
/*app.get('/persone/:id', (req, res)=>{
    console.log(req.params);
    const {id} = req.params;
    const personaID = req.params.id;
    const persona = persone.find((persona)=> persona.id === personaID);
    if(!persona){
        return res.status(404).json({messaggio: "non trovato", code: 404}); //send("Prodotto non trovato");
    }
    res.json(persona);
});
*/
// limit --> limiti di persone
app.get('/persone/search', (req, res) =>{
    const {query, limit} = req.query;
    let personeFiltrate = [...persone];
    if(query){
        personeFiltrate = personeFiltrate.filter((persona)=>{
            return persona.nome.startsWith(query);
        });
    }
    if(limit){
        personeFiltrate = personeFiltrate.slice(0, Number(limit));
    }
    // successo è diverso da errore, bisogna mettere return perchè deve essere una sola risposta
    if(personeFiltrate.length < 1){
        return res.status(200).json({success: true, data :[]}); // solo data o code : 200
    }
    // una sola risposta
    res.status(200).json(personeFiltrate);
    //console.log(req.query);
    //res.send("ciao"); // http://localhost:3001/persone/search?nome=luca&cognome=rossi --> mi stampa su console { nome: 'luca', cognome: 'rossi' }
});
app.listen(3001);
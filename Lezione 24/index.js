/*
 24 Esempio API Persone GET

 - GET /api/persone - tutte le persone
 - GET /api/persone/:id - una persona specifica
 - POST /api/persone - inserire una persona
 - PUT /api/persone/:id - modificare persone
 - DELETE /api/persone/:id - eliminare persone
*/

//esercizio 2: modificare il modo in cui modifichiamo l'array in put
// cambiare gli id
const express = require ('express');
const app = express();
// copia di json, se spengo sparisce l'inserimento
const { persone } = require('./persone');
app.use(express.json()); //lavoriamo con json mettiamo un middleware
//app.use(express.urlencoded({extended: false})); //per method post
// form method="post" action="/" esercizio di uso form post
app.get('/api/persone', (req, res)=>{
    res.status(200).json({success: true, data: persone}); // si puo' aggiungere un flag success
});
app.get('/api/persone/:id', (req, res)=>{
    const {id}= req.params;
    const persona = persone.find((persona) => persona.id === id);

    res.json({success: true, data:persona }); // semplice res.json(persona);
});
app.post('/api/persone', (req, res)=>{
    console.log(req.body);
    const persona = req.body;
    persone.push(persona);
    res.status(200).json({success: true , data: persone});
});

app.put('/api/persone/:id', (req, res)=>{
    const { id } = req.params; // index 0 Luca Rossi
    const persona = req.body;
    // campato su aria
    persone[Number(id)-1]=persona; // .nome sia a persone che a persona per modificare l'attributo dell'oggeto
    res.status(200).json({success: true, data: persone}) // data : [], error: " " o 463455453
});
app.delete('/api/persone/:id', (req, res)=>{
    const {id} = req.params;
    const index = persone.findIndex(persona => persona.id === id);
    persone.splice(index,1); // parte da indice ed elimina al massimo uno
    res.status(200).json({success: true, data: persone});
})
app.listen(3002);

//cambiare sui parametri, array del json non è persistente
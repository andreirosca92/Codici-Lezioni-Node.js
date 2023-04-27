/*
19 express json

- ripasso veloce json (uno standard per passaggio dati simile a xml)
- pulire codice
- res json esempio
- res json con file esterno
*/
/*
{
    "name": "edoardo",
    "age": 28,
    "indirizzo":{
        "citta": "milano",
        "via": "via torino",
        "cap": "435345"
    }
    "interessi":["basket", "calcio","dota2"]
}
*/

const express = require('express');

const app = express();
const {persone} = require('./persone');
app.get('/', (req, res) =>{
    //res.json([{nome:"luca", cognome:"rossse"}, {nome:"anna", cognome:"neri"}]); //creazione di un array che contiene due oggetti
    res.json(persone);
});
app.listen(3000);

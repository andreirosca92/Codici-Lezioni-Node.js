/*
17 aggiungere file statici

- creare cartella public/static
- app.use cartella
- creare pagine html per home, about e contatti

*/

const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile('homepage.html', {root : __dirname + "/public"});
});

app.get('/about',(req, res) =>{
    res.sendFile('about.html', {root : __dirname + "/public"});
})
app.get('/contatti', (req, res)=>{
    res.sendFile('contatti.html', {root: __dirname + "/public"});
});
app.get('*',(req, res)=>{
    res.sendFile('404.html', {root: __dirname + "/public"});
});
//
//app.listen(3001);
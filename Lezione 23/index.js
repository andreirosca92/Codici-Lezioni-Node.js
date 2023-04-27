/*
 23 Postman
 - cos'è postman? (testare i form in node.js)
 - installare
 - esempio get, post, res.json, put, delete
*/
const express = require('express');

const app = express();
// middleware
app.use(express.json());
app.get('/', (req, res)=>{
    res.send("Homepage");
});
app.post('/', (req, res)=>{
    console.log(req.body);
    res.send("ok post");
});
app.get('/utente', (req, res) =>{
     res.json({nome:"Luca", cognome: "Rossi"});
});
app.put('/', (req, res)=>{
    console.log(req.body);
    res.send("ok put");
});
app.delete('/', (req, res)=>{
    console.log(req.body);
    res.send("ok delete");
});
// testare con postaman il GET e POST, nel compilatore nodemon non ci da niente
// perchè non è stato inserito un middleware

//app.listen(3002);
// operazioni CRUD (COPY- READ - UPDATE- DELETE)
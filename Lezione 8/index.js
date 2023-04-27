/*
08 modulo HTTP introduzione

-serve per creare un web server
- importare http
- creare un server con risposta defaultù
- mettere server in ascolto
- gestire richiesta con routing e errore


*/

/*
//console.log("ciao") //entra ed esce (stampa ciao)
const http = require('http')
//request (richiesta) ed response (risposta)
const server = http.createServer((req, res) => {
   res.write("Benvenuto sul nostro sito");
   res.end();
})
server.listen(3000); //server in ascolto sulla porta 3000 in localhost
//routing (instradamento)
*/
const http = require('http')
//request (richiesta) ed response (risposta)
const server = http.createServer((req, res) => {
   if(req.url === "/"){
        res.end("Benvenuto sul sito");
   }
    if(req.url ==="/edoardo" ){
        res.end("il profilo di edoardo");
    }
    res.end(`<h1>Errore</h1>
        <p> Torno alla <a href="/">home</a> perche' la pagina non esiste </p>
        `)
    
})
server.listen(3000); 
/*
15  Richieste Http
- come funziona il web
- struttura messaggi http (metodo, url, header, body)
- metodi http (esempi url)
 //www.google.com -> F12->network -> nel headers -> request URL->request mehtod GET: di sola letture, chiediamo dati in lettura, status code 200 (ok)
 // response Headers
*/
Come funziona il web

client (utente, browser) --> richiesta http --> server (node/express)

server (node/express) ---> risposta http ---> client (utente, browser)

Metodi http

GET - leggere dati 
POST - inviare dati (inviamo i dati in modo sicuro)
PUT - modificare dati
DELETE - eliminare dati

GET - sito.it/api/ordini (vedere tutti gli ordini)
    - sito.it/api/ordini/:id (vedere un ordine specifico) //id puo' essere 23324

POST - sito.it/api/ordini (eseguire un ordine)

PUT - sito.it/api/ordini/:id (modificare un ordine)

DELETE -sito.it/api/ordini/:id (eliminare un ordine)
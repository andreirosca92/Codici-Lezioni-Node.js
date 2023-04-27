/*
01 Cos'è NodeJS
- Nasce nel 2009
- Javascript runtime environment che permette di eseguire JS fuori dal browser
- Chrome V8 engine scritto in C++
    Scriviamo Javascript ---> V8 C++ --> codice macchina

- Node ha un single-thread event loop che esegue il codice senza blocchi (non-blocking code)
- Node permette di creare applicazioni scalabili
- Permette inoltre di scrivere backend e frontend di un'app interamente con un linguaggio di programmazione

- Parlo chiave: event-loop, non-blocking code, async, promise, callback
*/

/*
browser --> chrome --> V8 --> javascript ---> funzionalità
applicazione --> c++ --> v8 --> javascript --> funzionalità (non ce window, document ovvero WEB API)

metodo tradizionale (multi-thread)
user1 --->data       (server)
                    thread --> 1:30-->
user2 --->data
                    thread --> 2 min-->

                    thread --->

                    thread --->
metodo single thread event loop
user1 --> data --> mutuo
                             thread --->  <----
user2 ---> data ---> mutuo

user5 
*/

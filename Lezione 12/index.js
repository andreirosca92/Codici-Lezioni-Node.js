/*
12 Event Loop

- event loop / single thread /async / non-blocking code
- event queue
- call stack
*/
/*
//codice bloccante sincrono
Task 6 ore --->
task 3 s secondi
task -->
task
task
*/
/*
// un solo cameriere che gestisce tutti gli eventi
// cliente1, cliente2,...,clienten si chiamano event loop
cliente1 //evento1

cliente2 //evento2
                              //un solo cameriere                          //quando hai finito l'ordine mi chiami
cliente3                     cameriere          cucina(callback cliente1, cliente2, cliente3) //stack del callback

cliente4                                        cucina(callback cliente2, cliente3, cliente5) //finito il cliente 1          

cliente5                                        cucina(callback cliente5)

cliente6                                        cucina(callback cliente6, callback cliente1)

*/
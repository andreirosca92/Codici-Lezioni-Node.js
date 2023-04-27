/*
10 Package JSON

- package.json è un file manifest con le info del nostro progetto
- come crearlo? manualmente, npm init, npm init -y
- come è composto?
- installiamo una dipendenza d'esempio: lodash e bootstrap
- importiamo e usiamo lodash
- disinstallare pacchetto con npm unistall oppure eliminando package-log, node-modules e dependency
- package-lock.json
- spiegazione versioni x.y.z major-minor-patch
//^5.0.0 5 a salire
// 1.0.0 rilascio gioco problema nomi schermo fix patch, aggiungere mappa minor, modificare fisica salto major.
// 1.0.0 -> 2.0.0 possibilità di codici deprecati
*/

const _ = require('lodash');

const oggetti =[1,[2,[3,[4]]]];
const oggetti2 =_.flatMapDeep(oggetti);

console.log(oggetti2);
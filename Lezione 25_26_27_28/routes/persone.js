const express = require('express');

const router = express.Router();
const { persone } = require('../persone');

router.get('/', (req, res)=>{
    res.status(200).json({success: true, data: persone}); // si puo' aggiungere un flag success
});
router.get('/:id', (req, res)=>{
    const {id}= req.params;
    const persona = persone.find((persona) => persona.id === id);

    res.json({success: true, data:persona }); // semplice res.json(persona);
});
router.post('/', (req, res)=>{
    console.log(req.body);
    const persona = req.body;
    persone.push(persona);
    res.status(200).json({success: true , data: persone});
});

router.put('/:id', (req, res)=>{
    const { id } = req.params; // index 0 Luca Rossi
    const persona = req.body;
    // campato su aria
    persone[Number(id)-1]=persona; // .nome sia a persone che a persona per modificare l'attributo dell'oggeto
    res.status(200).json({success: true, data: persone}); // data : [], error: " " o 463455453
});
router.delete('/:id', (req, res)=>{
    const {id} = req.params;
    const index = persone.findIndex(persona => persona.id === id);
    persone.splice(index,1); // parte da indice ed elimina al massimo uno
    res.status(200).json({success: true, data: persone});
});

module.exports = router;
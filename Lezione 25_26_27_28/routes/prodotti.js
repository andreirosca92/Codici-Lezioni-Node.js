const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.status(200).json({success: true, data: {nome:"sedia", prezzo: 200} });
});

module.exports=router;

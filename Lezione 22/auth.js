const auth = (req, res, next) => {
    //spachettiamo, unpacking
    const { user } = req.query;
    if(user == 'Luca'){
        next();
    }
    else{
        res.status(401).send("non autorizzato");
    }
    console.log('accesso effettuato');
    
    //next();
};

module.exports=auth;    
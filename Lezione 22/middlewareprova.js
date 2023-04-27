const middlewareProva = (req, res, next) => {
    const { method, url }= req;
    const time = new Date().getMinutes();
    console.log(method, url, time);
    next(); // senza next() rimane bloccato nel middleware
    //res.send("dal Middleware");

};

module.exports=middlewareProva;
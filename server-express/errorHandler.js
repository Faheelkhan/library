'use strict'
function serverError500( res, err ){
    res.status(500).json(err);
}

function serverError404( res, err ){
    res.status(404).json(err);
}

module.exports = {
    serverError500 : serverError500,
    serverError404 : serverError404
}
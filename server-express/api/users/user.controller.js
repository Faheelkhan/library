'use strict'
const UserService = require('./user.service');
const ServiceManager = require('../../service_manager/requiredModules');
const ErrorService = ServiceManager.errorHandler;
// create user in database
exports.createUser = ( req, res ) => {
    let query = {};
    // Generate dynamic query for creating user 
    for( let key in req.body ){
        query[key] = req.body[key];
    }

    UserService.createUser(query)
    .then(function( user ){
        res.status(200).json(user);
    })
    .catch(function( err ){
        ErrorService.serverError500( res, err );
    })
}

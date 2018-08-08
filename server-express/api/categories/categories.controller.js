'use strict'
const CategoryService = require('./categories.service');
const ServiceManager = require('../../service_manager/requiredModules');

exports.createCategory = ( req, res ) => {
    CategoryService.createCategory()
    .then(function(){
        res.status(200).json(post);
    })
    .catch(function( err ){
        ServiceManager.errorHandler.serverError500( res, err );
    })
}

exports.getCategories = ( req, res ) => {
    CategoryService.getCategories({})
    .then(function(posts){
        if( posts.length ){
            res.status(200).json(posts);
        } else {
            ServiceManager.errorHandler.serverError404( res, err );
        }
    })
    .catch(function( err ){
        ServiceManager.errorHandler.serverError500( res, err );
    })
}
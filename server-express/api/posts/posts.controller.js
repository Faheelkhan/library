'use strict'
const PostService = require('./posts.service');
const ServiceManager = require('../../service_manager/requiredModules');

exports.createPost = ( req, res ) => {
    PostService.createPost()
    .then(function(){
        res.status(200).json(post);
    })
    .catch(function( err ){
        ServiceManager.errorHandler.serverError500( res, err );
    })
}

exports.getPosts = ( req, res ) => {
    PostService.getPosts({})
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
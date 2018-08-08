'use strict'
const Posts = require('./posts.model');

exports.createPost = ( query ) => {
    return new Promise(function( resolve, reject ){
        Posts.create( query, ( post, err ) => {
            if( err ){
                reject(err);
            } else {
                resolve(post);
            }   
        })
    })
}

exports.getPosts = ( query ) => {
    return new Promise(function( resolve, reject ){
        Posts.find( query )
        .exec(( post, err ) => {
            if( err ){
                reject(err);
            } else {
                resolve(post);
            }   
        })
    })
}
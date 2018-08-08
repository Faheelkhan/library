'use strict'
const Category = require('./categories.model');

exports.createCategory = ( query ) => {
    return new Promise(function( resolve, reject ){
        Category.create( query, ( category, err ) => {
            if( err ){
                reject(err);
            } else {
                resolve(post);
            }   
        })
    })
}

exports.getCategories = ( query ) => {
    return new Promise(function( resolve, reject ){
        Category.find( query )
        .exec(( categorys, err ) => {
            if( err ){
                reject(err);
            } else {
                resolve(post);
            }   
        })
    })
}
'use strict'
const ServiceManager = require('../service_manager/requiredModules');

exports.generateSaltAndHash = async function( property ){
    return new Promise(function( resolve, reject ){
        ServiceManager.bcrypt.genSalt(10, ( err, salt ) => {
            if( err ){
                reject(err);
            } else {
                ServiceManager.bcrypt.hash( property, salt,( err, hash ) => {
                    if( err ){
                        reject(err);
                    } else {
                        resolve(hash);
                    }
                })
            }
        }) 
    })  
}
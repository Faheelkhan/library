'use strict'
const User = require('./user.model');
const UtilService = require('../../utility/util');
// Create new user in database
exports.createUser = async function( query ){
   const hashPassword = await(UtilService.generateSaltAndHash( query.password ));
   return new Promise(function( resolve, reject ){
        query.password = hashPassword;
        User.create( query , function( err, user ){
            if( err ){
                reject(err);
            } else {
                user.remove('password');
                resolve(user);
            }
        })
   })
}
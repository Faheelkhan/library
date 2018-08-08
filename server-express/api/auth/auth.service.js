'use strict'
const User = require('./auth.model');
const objectId = require('mongodb').ObjectID
exports.createUser = (query) => {
    return new Promise((resolve, reject) => {
        User.create(query, (user, err) => {
            if (err) {
                reject(err);
            } else {
                resolve(user)
            }
        })
    })
}

exports.getUsers = (query) => {
    return new Promise((resolve, err) => {
        User.find(query)
            .exec((err, user) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(user);
                };
            });
    });
};

exports.getSingleUser = (query) => {
    return new Promise((resolve, reject) => {
        User.findById({ '_id': query.id })
            .exec((err, user) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(user);
                };
            });
    });
};

exports.deleteUser = (query) => {
    return new Promise((resolve, reject) => {
        User.deleteOne({ '_id': query })
            .exec((err, user) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(user);
                }
            })
    })
}

exports.updateUser = (query, id) => {
    delete query.id
    return new Promise((resolve, reject) => {
        User.updateOne({ '_id': id.id }, { $set: query })
            .exec((err, user) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(user);
                }
            })
    })
}
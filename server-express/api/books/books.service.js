'use strict'
const books = require('./books.model');

exports.createBook = (query) => {
    return new Promise((resolve, reject) => {
        books.create(query, (book, err) => {
            if (err) {
                reject(err);
            } else {
                resolve(book)
            };
        });
    });
};
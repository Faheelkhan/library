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

exports.getAllBooks = (query) => {
    return new Promise((resolve, err) => {
        books.find(query)
            .exec((err, books) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(books);
                };
            });
    });
};

exports.deleteAllBooks = (query) => {
    return new Promise((resolve, err) => {
            books.deleteMany({})
                .exec((err, books) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(books);
                    };
                });
    })
}

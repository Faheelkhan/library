'use strict'
const bookService = require('./books.service');
const ServiceManager = require('../../service_manager/requiredModules');

exports.createBook = (req, res) => {
    var payload = {
        'name': req.body.name,
        'images': req.body.images,
        'details': req.body.details,
        'price': req.body.price,
        'userId': req.body.userId,
        'bookAuthor': req.body.bookAuthor,
        'bookTitle': req.body.bookTitle
    }
    bookService.createBook(payload)
        .then(() => {
            res.status(200).json(book);
        })
        .catch((err) => {
            ServiceManager.errorHandler.serverError500(res, err);
        });
};

exports.getAllBooks = (req, res) => {
    bookService.getAllBooks({})
        .then((posts) => {
            if (posts.length) {
                res.status(200).json(posts);
            } else {
                ServiceManager.errorHandler.serverError404(res, err);
            }
        })
        .catch((err) => {
            ServiceManager.errorHandler.serverError500(res, err);
        })
};

exports.deleteAllBooks = (req, res) => {
    bookService.deleteAllBooks({})
        .then((posts) => {
            if (posts.length) {
                res.status(200).json(posts);
            } else {
                ServiceManager.errorHandler.serverError404(res, err);
            }
        })
        .catch((err) => {
            ServiceManager.errorHandler.serverError500(res, err);
        })
};
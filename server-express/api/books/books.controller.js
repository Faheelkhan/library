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
        'bookAuthor': req.body.bookAuthor
    }
    bookService.createBook(payload)
        .then(() => {
            res.status(200).json(book);
        })
        .catch((err) => {
            ServiceManager.errorHandler.serverError500(res, err);
        });
};
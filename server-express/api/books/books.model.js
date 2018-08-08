'use strict'
const ServiceManager = require('../../service_manager/requiredModules');

let BookSchema = ServiceManager.mongoose.Schema({
    'name': String,
    'details': String,
    'images': { type: Array, "default": [] },
    'price': Number,
    'userId': String,
    'bookAuthor': String
});

BookSchema.plugin(ServiceManager.deepPopulate);
module.exports = ServiceManager.mongoose.model('books', BookSchema);
'use strict'
const ServiceManager = require('../../service_manager/requiredModules');

let CategoriesSchema = ServiceManager.mongoose.Schema({

    name: String,
    imageLink: String,

    createdDate: {
        type: Date,
        default: new Date()
    }
})

CategoriesSchema.plugin(ServiceManager.deepPopulate);
module.exports = ServiceManager.mongoose.model('Category', CategoriesSchema);
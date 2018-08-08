'use strict'
const ServiceManager = require('../../service_manager/requiredModules');

let PostsSchema = ServiceManager.mongoose.Schema({

    category : {
        type : ServiceManager.mongoose.Schema.Types.ObjectId,
        ref : 'Category'
    },

    author : {
        type : ServiceManager.mongoose.Schema.Types.ObjectId,
        ref : 'Author'
    },
    
    videoLink : String,

    imageLink : String,

    createdDate : {
        type : Date,
        default : new Date()
    },

    publishDate : Date,

    categoryType : String
})

PostsSchema.plugin(ServiceManager.deepPopulate);
module.exports = ServiceManager.mongoose.model('Posts', PostsSchema);
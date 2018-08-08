'use strict'
const ServiceManager = require('../../service_manager/requiredModules');

let UserSchema = ServiceManager.mongoose.Schema({
    name: String,
    password: String,
});

UserSchema.plugin(ServiceManager.deepPopulate);
module.exports = ServiceManager.mongoose.model('Users', UserSchema);
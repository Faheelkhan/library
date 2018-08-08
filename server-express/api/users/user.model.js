const ServiceManager = require('../../service_manager/requiredModules');

//Create User Schema
const UserSchema = ServiceManager.mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

// DeepPopulate plugin ( Copy refrenced object during mongodb find method )
UserSchema.plugin(ServiceManager.deepPopulate);
module.exports = ServiceManager.mongoose.model('User', UserSchema);
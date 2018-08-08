'use strict'
const ServiceManager = require('../../service_manager/requiredModules');
const controller = require('./user.controller')
const router = ServiceManager.express.Router();

// Create User
router.post('/', controller.createUser );

// When require Routes from app.js
// then by default they load index page but when the load they 
// found object because its an object file instead of router middleware
// This is the reason we do module.exports
// By doing this the found directly router function 

module.exports = router;
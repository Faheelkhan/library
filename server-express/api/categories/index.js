'use strict'
const controller = require('./categories.controller')
const ServiceManager = require('../../service_manager/requiredModules');
const router = ServiceManager.express.Router();
// CREATE POST
router.post('/', controller.createCategory );

// GET POSTS
router.get('/', controller.getCategories )


// When require Routes from app.js
// then by default they load index page but when the load they 
// found object because its an object file instead of router middleware
// This is the reason we do module.exports
// By doing this the found directly router function 

module.exports = router;
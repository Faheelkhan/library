'use strict'

const controller = require('./books.controller');
const ServiceManager = require('../../service_manager/requiredModules');

const router = ServiceManager.express.Router();

router.post('/createBook', controller.createBook);
router.get('/getAllBooks', controller.getAllBooks);
router.delete('/deleteBooks', controller.deleteAllBooks);


module.exports = router;
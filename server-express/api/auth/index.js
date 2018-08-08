'use strict'

const controller = require('./auth.controller');
const ServiceManager = require('../../service_manager/requiredModules');

const router = ServiceManager.express.Router();

router.post('/createUser', controller.createUser);
router.get('/getUsers', controller.getUsers);
router.post('/singleUser', controller.getSingleUser);
router.delete('/deleteUser', controller.deleteUser);
router.post('/updateUser', controller.updateUser);

module.exports = router;
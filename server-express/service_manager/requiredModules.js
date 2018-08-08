'use strict'
const _express = require('express');
const _app = _express();
const _config = require('../config/database');
const _mongoose =  require('mongoose');
const _bodyParser = require('body-parser');
const _cors = require('cors');
const _errorHandler = require('../errorHandler');
const _router = _express.Router();
const _deepPopulate = require('mongoose-deep-populate')(_mongoose);
const _bcrypt = require('bcryptjs');


module.exports =  {
    express : _express,
    app : _app,
    config : _config,
    mongoose : _mongoose,
    bodyParser : _bodyParser,
    cors : _cors,
    errorHandler : _errorHandler,
    router : _router,
    deepPopulate : _deepPopulate,
    bcrypt : _bcrypt
}